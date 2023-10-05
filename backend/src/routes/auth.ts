import { verifyToken } from "./../middlewares/index"
import { Router } from "express"
import { check } from "express-validator"
import { Request, Response } from "express"
import Role from "../models/Role"
import HttpStatusCodes from "http-status-codes"
import * as authControllers from "../controllers/authControllers"

export function authRouter(): Router {
    const router = Router()

    // LOGIN ROUTE
    router.post(
        "/login",
        check("email", "Please include a valid email").isEmail(),
        authControllers.login,
    )

    // SIGN UP
    router.post(
        "/signup",
        [
            check("email", "Please include a valid email").isEmail(),
            check("password", "Passwords must contain at least eight characters")
                .exists()
                .isLength({ min: 8 }),
        ],
        authControllers.signup,
    )

    // LOG OUT
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
