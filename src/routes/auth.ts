import { Router } from "express"
import { check } from "express-validator"
import { Request, Response } from "express"
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

    // LOGIN WITH GOOGLE
    router.post("/loginWithGoogle", AuthControllers.loginWithGoogle)

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

    router.post("/activation", AuthControllers.activation)

    return router
}

export default authRouter
