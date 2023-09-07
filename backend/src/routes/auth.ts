import { Router } from "express"
import { check } from "express-validator"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User"
import jwt from "jsonwebtoken"
import { config } from "../index"
import HttpStatusCodes from "http-status-codes"

export function authRouter(): Router {
    const router = Router()
    router.get("/login", (req, res) => {
        res.send("this is login route")
    })

    router.post(
        "/signup",
        [
            check("email", "Please include a valid email").isEmail(),
            check("password", "Passwords must contain at least eight characters")
                .exists()
                .isLength({ min: 8 }),
        ],
        async (req: Request, res: Response) => {
            const { username, email, password } = req.body
            try {
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
    return router
}
