import { Response, NextFunction } from "express"
import HttpStatusCodes from "http-status-codes"
import jwt from "jsonwebtoken"
import Payload from "../types/Payload"
import Request from "../types/Request"
import { config } from "../index"

export namespace Middlewares {
    export const verifyToken: any = (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization || ""
        if (token) {
            try {
                const accessToken = token.split(" ")[1]
                const payload: Payload | any = jwt.verify(accessToken, config.jwtSecret)
                req.userId = payload.userId
                next()
            } catch (error) {
                res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "Token is not valid" })
            }

            // jwt.verify(accessToken, process.env.JWT_SECRET || "", (err, user) => {
            // 	if (err) {
            // 		res.status(403).json("Token is not valid");
            // 	}
            // 	req.user = user;
            // 	next();
            // });
        } else {
            return res
                .status(HttpStatusCodes.UNAUTHORIZED)
                .json({ msg: "No token, authorization denied" })
        }
    }
}

export namespace HandleError {
    export const notFound = (req: Request, res: Response, err: Error) => {
        return res.status(HttpStatusCodes.NOT_FOUND).json({ error: true, message: "Not found" })
    }
}
