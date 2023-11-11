import { Request, Response } from "express"
import HttpStatusCodes from "http-status-codes"
import RoleServices from "../services/roleServices"

namespace RoleControllers {
    export const createRole = async (req: Request, res: Response) => {
        try {
            const response = await RoleServices.createRole(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getAllRoles = async (req: Request, res: Response) => {
        try {
            const response = await RoleServices.getAllRoles()
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const getRole = async (req: Request, res: Response) => {
        try {
            const response = await RoleServices.getRole(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const updateRole = async (req: Request, res: Response) => {
        try {
            const response = await RoleServices.updateRole(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }

    export const deleteRole = async (req: Request, res: Response) => {
        try {
            const response = await RoleServices.deleteRole(req.body)
            res.status(HttpStatusCodes.OK).json(response)
        } catch (error) {
            return error
        }
    }
}

export default RoleControllers
