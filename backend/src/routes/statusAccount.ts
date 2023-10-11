import { Router } from "express"
import { Middlewares } from "../middlewares"
import StatusAccountControllers from "../controllers/statusAccount"

const statusAccount = (): Router => {
    const router = Router()

    // verify
    // router.use(Middlewares.verifyToken)

    router.post("/createStatus", StatusAccountControllers.createStatus)
    router.get("/getAllStatus", StatusAccountControllers.getAllStatus)
    router.get("/getStatus", StatusAccountControllers.getStatus)
    router.put("/updateStatus", StatusAccountControllers.updateStatus)
    router.delete("/deleteStatus", StatusAccountControllers.deleteStatus)

    return router
}

export default statusAccount
