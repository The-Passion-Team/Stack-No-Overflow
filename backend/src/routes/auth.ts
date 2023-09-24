import { verifyToken } from "./../middlewares/index"
import { Router } from "express"
import { check } from "express-validator"
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
            admin: user.admin,
        },
        config.jwtActive,
        { expiresIn: "60d" },
    )
}

export const generateRefreshToken = (user: any) => {
    return jwt.sign(
        {
            id: user.id,
            admin: user.admin,
        },
        config.jwtRefresh,
        { expiresIn: "365d" },
    )
}

export function authRouter(): Router {
    const router = Router()

    // LOGIN ROUTE
    router.post(
        "/login",
        check("email", "Please include a valid email").isEmail(),
        async (req: Request, res: Response) => {
            try {
                const { email, password } = req.body
                //find the user's email in the model
                const user = await User.findOne({ email }).select("+password")
                if (!user) {
                    return res
                        .status(HttpStatusCodes.NOT_FOUND)
                        .send({ err: true, msg: "User not found" })
                }

                //compare the user-entered password with the hashed password
                const matchPassword = await bcrypt.compare(password, user.password)

                if (!matchPassword) {
                    return res
                        .status(HttpStatusCodes.BAD_REQUEST)
                        .send({ err: true, msg: "Wrong password" })
                } else if (user && matchPassword) {
                    //Generate access token
                    const accessToken = generateAccessToken(user)
                    //Generate refresh token
                    const refreshToken = generateRefreshToken(user)

                    //STORE REFRESH TOKEN IN COOKIE
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        secure: false,
                        path: "/",
                        sameSite: "strict",
                    })
                    const userLogin = await User.findOne({ email })
                        .select("-password")
                        .populate({ path: "role", select: "name -_id" })

                    // const { password, creat, ...others } = user._doc;
                    res.status(HttpStatusCodes.OK).json({
                        err: false,
                        msg: "Login Success!",
                        data: { userLogin, accessToken },
                    })
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
            try {
                const { username, email, password, role } = req.body
                //generate salt to hash password
                const salt = await bcrypt.genSalt(10)
                //set user password to hashed password
                const hashedPassword = await bcrypt.hash(password, salt)

                const user = await User.findOne({ email })
                if (!user) {
                    //create new user
                    const newUser = {
                        username,
                        email,
                        password: hashedPassword,
                        role,
                    }

                    jwt.sign(newUser, config.jwtSecret, { expiresIn: "60d" })

                    await new User(newUser).save()

                    res.status(HttpStatusCodes.OK).send({ msg: "Signup Success!" })
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

    router.post("/add", async (req: Request, res: Response) => {
        try {
            await new Role({ name: "admin" }).save()

            res.status(HttpStatusCodes.OK).send({ msg: "Add Success!" })
        } catch (err: any) {
            console.error(err.message)
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
        }
    })

    return router
}
