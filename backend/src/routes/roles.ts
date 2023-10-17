import { Router } from "express"
import { Middlewares } from "../middlewares"
import RoleControllers from "../controllers/roleControllers"

const roleRouter = (): Router => {
    const router = Router()

    // verify
    // router.use(Middlewares.verifyToken)

    router.post("/createRole", RoleControllers.createRole)
    router.get("/getAllRoles", RoleControllers.getAllRoles)
    router.get("/getRole", RoleControllers.getRole)
    router.put("/updateRole", RoleControllers.updateRole)
    router.delete("/deleteRole", RoleControllers.deleteRole)

    return router
}

export default roleRouter
