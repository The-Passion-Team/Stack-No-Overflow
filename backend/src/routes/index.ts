import { HandleError } from "../middlewares"
import authRouter from "./auth"
import postRouter from "./posts"

const initRoutes = (app: any) => {
    const v1 = "/api/v1"

    app.use(`${v1}/auth`, authRouter())
    app.use(`${v1}/post`, postRouter())

    return app.use(HandleError.notFound)
}

export default initRoutes
