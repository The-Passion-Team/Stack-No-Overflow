import { HandleError } from "../middlewares"
import authRouter from "./auth"
import postRouter from "./posts"
import tagRouter from "./tags"
import roleRouter from "./roles"
import statusAccountRouter from "./statusAccount"
import methodLoginRouter from "./methodLogin"

const initRoutes = (app: any) => {
    const v1 = "/api/v1"

    app.use(`${v1}/auth`, authRouter())
    app.use(`${v1}/post`, postRouter())
    app.use(`${v1}/tag`, tagRouter())
    app.use(`${v1}/role`, roleRouter())
    app.use(`${v1}/statusAccount`, statusAccountRouter())
    app.use(`${v1}/methodLogin`, methodLoginRouter())

    return app.use(HandleError.notFound)
}

export default initRoutes
