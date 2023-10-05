import jwt from "jsonwebtoken"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User"
import HttpStatusCodes from "http-status-codes"
import { config } from "../index"

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

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        console.log("req.body", req.body)
        console.log("first")
        // find the user's email in the model
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return res.status(HttpStatusCodes.NOT_FOUND).send({ err: true, msg: "User not found" })
        }

        //  compare the user-entered password with the hashed password
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .send({ err: true, msg: "Wrong password" })
        }

        // Not Error get data
        if (user && matchPassword) {
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
                .populate({ path: "role", select: "-_id name" })
                .exec()

            console.log("userLogin", userLogin)

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
}

export const signup = async (req: Request, res: Response) => {
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
}
