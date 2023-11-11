import { Request, Response } from "express"
import HttpStatusCodes from "http-status-codes"
import TagServices from "../services/tagServices"

namespace TagControllers {
    export const createTag = async (req: Request, res: Response) => {
        try {
            const response = await TagServices.createTag(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getAllTags = async (req: Request, res: Response) => {
        try {
            const response = await TagServices.getAllTags()
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getTag = async (req: Request, res: Response) => {
        try {
            const response = await TagServices.getTag(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const updateTag = async (req: Request, res: Response) => {
        try {
            const response = await TagServices.updateTag(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const deleteTag = async (req: Request, res: Response) => {
        try {
            const response = await TagServices.deleteTag(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const findTag = async (req: Request, res: Response) => {
        try {
            const key: string = req.body.key

            const response = await TagServices.findTag(key)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }
}

export default TagControllers
