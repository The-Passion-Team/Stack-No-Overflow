import { Router } from "express"
import { Middlewares } from "../middlewares"
import PostControllers from "../controllers/postControllers"

const postRouter = (): Router => {
    const router = Router()

    // verify
    // router.use(Middlewares.verifyToken)

    router.post("/createPost", PostControllers.createPost)
    router.get("/getAllPosts", PostControllers.getAllPosts)
    router.get("/getPost", PostControllers.getPost)
    router.put("/updatePost", PostControllers.updatePost)
    router.delete("/deletePost", PostControllers.deletePost)

    return router
}

export default postRouter
