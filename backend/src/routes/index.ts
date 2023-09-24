import HttpStatusCodes from "http-status-codes"
export * from "./auth"
export * from "./main"
import express from "express"
import { authRouter } from "./auth"
const app = express()

const initRoute = () => {
    console.log("first")
    const v1 = "/api/v1"

    app.use(`${v1}/auth`, authRouter)

    return app.use((req, res, err) => {
        return res.status(HttpStatusCodes.NOT_FOUND).send({ msg: "Not found" })
    })
}

export default initRoute
