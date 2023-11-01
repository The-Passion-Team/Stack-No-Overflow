import { Request, Response } from "express"
import HttpStatusCodes from "http-status-codes"
import MethodLoginServices from "../services/methodLoginServices"

namespace MethodLoginControllers {
    export const createOne = async (req: Request, res: Response) => {
        try {
            const response = await MethodLoginServices.createOne(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getAll = async (req: Request, res: Response) => {
        try {
            const response = await MethodLoginServices.getAll()
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getOne = async (req: Request, res: Response) => {
        try {
            const response = await MethodLoginServices.getOne(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const updateOne = async (req: Request, res: Response) => {
        try {
            const response = await MethodLoginServices.updateOne(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const deleteOne = async (req: Request, res: Response) => {
        try {
            const response = await MethodLoginServices.deleteOne(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }
}

export default MethodLoginControllers
