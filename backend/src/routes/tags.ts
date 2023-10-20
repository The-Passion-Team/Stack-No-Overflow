import { Router } from "express"
import { Middlewares } from "../middlewares"
import TagControllers from "../controllers/tagControllers"

const tagRouter = (): Router => {
    const router = Router()

    // verify
    // router.use(Middlewares.verifyToken)

    router.post("/createTag", TagControllers.createTag)
    router.get("/getAllTags", TagControllers.getAllTags)
    router.get("/getTag", TagControllers.getTag)
    router.put("/updateTag", TagControllers.updateTag)
    router.delete("/deleteTag", TagControllers.deleteTag)

    router.post("/findTag", TagControllers.findTag) // For auto complete search

    return router
}

export default tagRouter
