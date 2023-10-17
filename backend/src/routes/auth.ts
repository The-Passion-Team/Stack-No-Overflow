import { Router } from "express"
import { check } from "express-validator"
import { Request, Response } from "express"
import Role from "../models/Role"
import HttpStatusCodes from "http-status-codes"
import AuthControllers from "../controllers/authControllers"
import { Middlewares } from "../middlewares"

const authRouter = (): Router => {
    const router = Router()

    // LOGIN ROUTE
    router.post(
        "/login",
        check("email", "Please include a valid email").isEmail(),
        AuthControllers.login,
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

        AuthControllers.signup,
    )

    // LOG OUT
    router.post("/logout", async (req: Request, res: Response) => {
        Middlewares.verifyToken
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

export default authRouter
