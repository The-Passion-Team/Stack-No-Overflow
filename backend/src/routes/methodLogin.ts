import { Router } from "express"
import { Middlewares } from "../middlewares"
import MethodLoginControllers from "../controllers/methodLoginControllers"

const methodLoginRouter = (): Router => {
    const router = Router()

    // verify
    // router.use(Middlewares.verifyToken)

    router.post("/createOne", MethodLoginControllers.createOne)
    router.get("/getAll", MethodLoginControllers.getAll)
    router.get("/getOne", MethodLoginControllers.getOne)
    router.put("/updateOne", MethodLoginControllers.updateOne)
    router.delete("/deleteOne", MethodLoginControllers.deleteOne)

    return router
}

export default methodLoginRouter
