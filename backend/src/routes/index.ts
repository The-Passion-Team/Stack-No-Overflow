import { notFound } from "./../middlewares/handleError"
import authRouter from "./auth"

const initRoutes = (app: any) => {
    const v1 = "/api/v1"

    app.use(`${v1}/auth`, authRouter())

    return app.use(notFound)
}

export default initRoutes
