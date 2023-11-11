import { Request, Response } from "express"
import HttpStatusCodes from "http-status-codes"
import StatusAccountServices from "../services/statusAccountServices"

namespace StatusAccountControllers {
    export const createStatus = async (req: Request, res: Response) => {
        try {
            const response = await StatusAccountServices.createStatus(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getAllStatus = async (req: Request, res: Response) => {
        try {
            const response = await StatusAccountServices.getAllStatus()
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getStatus = async (req: Request, res: Response) => {
        try {
            const response = await StatusAccountServices.getStatus(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const updateStatus = async (req: Request, res: Response) => {
        try {
            const response = await StatusAccountServices.updateStatus(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const deleteStatus = async (req: Request, res: Response) => {
        try {
            const response = await StatusAccountServices.deleteStatus(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }
}

export default StatusAccountControllers
