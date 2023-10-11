import { sendEmail, verifyToken } from "./../middlewares/index"
import { Router } from "express"
import { check, validationResult } from "express-validator"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User"
import Role from "../models/Role"
import jwt from "jsonwebtoken"
import { config } from "../index"
import HttpStatusCodes from "http-status-codes"

export const generateAccessToken = (user: any) => {
    return jwt.sign(
        {
            id: user.id,
        },
        config.jwtAccess,
        { expiresIn: "60d" },
    )
}

export const generateRefreshToken = (user: any) => {
    return jwt.sign(
        {
            id: user.id,
        },
        config.jwtRefresh,
        { expiresIn: "365d" },
    )
}

export const generateActivationToken = (user: any) => {
	return jwt.sign(user, config.jwtSecret, { expiresIn: "60d" });
};

export function authRouter(): Router {
    const router = Router()

    router.post(
        "/login",
        check("email", "Please include a valid email").isEmail(),
        async (req: Request, res: Response) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .json({ errors: errors.array() });
            }
            try {
                const { email, password } = req.body
                //find the user's email in the model
                const user = await User.findOne({ email }).select("+password")
                if (!user) {
                    res.status(HttpStatusCodes.BAD_REQUEST).send({ msg: "User not found" })
                    return
                }

                //compare the user-entered password with the hashed password
                const matchPassword = await bcrypt.compare(password, user.password)

                if (!matchPassword) {
                    res.status(HttpStatusCodes.BAD_REQUEST).send({ msg: "Wrong password" })
                    return
                } else if (user && matchPassword) {
                    //Generate access token
                    const accessToken = generateAccessToken(user)
                    //Generate refresh token
                    const refreshToken = generateRefreshToken(user)

                    //STORE REFRESH TOKEN IN COOKIE
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        secure: false,
                        path: "/login",
                        sameSite: "strict",
                    })
                    const userLogin = await User.findOne({ email }).select("-password")
                    // const roleLogin = await Role.findById(userLogin?.role).select("name -_id")
                    
                    res.status(HttpStatusCodes.OK).json({ userLogin, accessToken})
                }
            } catch (err: any) {
                console.error(err.message)
                res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
            }
        },
    )

    router.post(
        "/signup",
        [
            check("email", "Please include a valid email").isEmail(),
            check("password", "Passwords must contain at least eight characters")
                .exists()
                .isLength({ min: 8 }),
        ],
        async (req: Request, res: Response) => {
            const { displayname, email, password } = req.body
            try {
                //generate salt to hash password
                const salt = await bcrypt.genSalt(10)
                //set user password to hashed password
                const hashedPassword = await bcrypt.hash(password, salt)

                const user = await User.findOne({ email })
                if (!user) {
                    //create new user
                    const newUser = {
                        displayname,
                        email,
                        password: hashedPassword,
                    }

                    const activationToken = generateActivationToken(newUser);
				    const url = `${config.clientUrl}/activation/${activationToken}`;
				    sendEmail({email, displayname, url});

                    res.status(HttpStatusCodes.OK).send({ msg: "Please complete your registration." })
                } else {
                    return res
                        .status(HttpStatusCodes.BAD_REQUEST)
                        .json({ msg: "This email already exists." })
                }
            } catch (err: any) {
                console.error(err.message)
                res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
            }
        },
    )

    router.post(
        "/activation",
        async (req: Request, res: Response) => {
            try {
                const { activationToken } = req.body;
                const user: any = jwt.verify(activationToken, config.jwtSecret);
                const { displayname, email, password } = user;
                const checkEmail = await User.findOne({ email });
                if (!checkEmail) {
                    //create new user
                    const newUser = new User({
                        displayname,
                        email,
                        password,
                    });
                    
                    await newUser.save()

                    res.status(HttpStatusCodes.OK).send({ msg: "Account has been activated!" })
                } else {
                    return res
                        .status(HttpStatusCodes.BAD_REQUEST)
                        .json({ msg: "This email already exists." })
                }
            } catch (err: any) {
                console.error(err.message)
                res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
            }
        },
    )

    router.post("/logout", async (req: Request, res: Response) => {
        verifyToken
        //Clear cookies when user logs out
        res.clearCookie("refreshToken")
        res.status(HttpStatusCodes.OK).json({ msg: "Logged out successfully!" })
    })

    return router
}
