import { HandleError } from "../middlewares"
import authRouter from "./auth"
import postRouter from "./posts"
import tagRouter from "./tags"
import roleRouter from "./roles"

const initRoutes = (app: any) => {
    const v1 = "/api/v1"

    app.use(`${v1}/auth`, authRouter())
    app.use(`${v1}/post`, postRouter())
    app.use(`${v1}/tag`, tagRouter())
    app.use(`${v1}/role`, roleRouter())

    return app.use(HandleError.notFound)
}

export default initRoutes
