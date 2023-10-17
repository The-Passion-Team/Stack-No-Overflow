import HttpStatusCodes from "http-status-codes"
import { Request, Response } from "express"
import PostServices from "../services/postServices"

namespace PostControllers {
    export const createPost = async (req: Request, res: Response) => {
        try {
            const response = await PostServices.createPost(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getAllPosts = async (req: Request, res: Response) => {
        try {
            const response = await PostServices.getAllPosts()
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getPost = async (req: Request, res: Response) => {
        try {
            const response = await PostServices.getPost(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const updatePost = async (req: Request, res: Response) => {
        try {
            const response = await PostServices.updatePost(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const deletePost = async (req: Request, res: Response) => {
        try {
            const response = await PostServices.deletePost(req.body._id)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }
}

export default PostControllers
