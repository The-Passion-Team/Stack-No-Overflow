import { Request, Response } from "express"
import HttpStatusCodes from "http-status-codes"

export const notFound = (req: Request, res: Response, err: Error) => {
    return res.status(HttpStatusCodes.NOT_FOUND).json({ err: true, msg: "Not found" })
}
