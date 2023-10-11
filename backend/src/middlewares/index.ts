import { Response, NextFunction } from "express"
import HttpStatusCodes from "http-status-codes"
import jwt from "jsonwebtoken"
import Payload from "../types/Payload"
import Request from "../types/Request"
import { config } from "../index"
import nodemailer from "nodemailer"
import { OAuth2Client } from "google-auth-library"
import dotenv from "dotenv"

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
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

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"
dotenv.config()
const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS,
} = process.env

const oauth2Client = new OAuth2Client(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND,
)

// send mail
type sendEmail = {
    email: string
    displayname: string
    url: string
}

export const sendEmail = async ({ email, displayname, url }: sendEmail) => {
    try {
        oauth2Client.setCredentials({
            refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
        })

        const accessToken = await oauth2Client.getAccessToken()
        const smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: SENDER_EMAIL_ADDRESS,
                clientId: MAILING_SERVICE_CLIENT_ID,
                clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                accessToken: accessToken?.token,
            },
        } as nodemailer.TransportOptions)

        const mailOptions = {
            from: SENDER_EMAIL_ADDRESS,
            to: email,
            subject: "Complete Registration With Stack No Overflow",
            html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                    <h2 style="text-align: center; text-transform: uppercase;color: teal;">
                        Hi, ${displayname}!
                    </h2>

                    <p>
                        Welcome to the Stack No Overflow. 
                        We're excited to have you get started. 
                        First, you need to verify your email address. 
                        Just press the button below.
                    </p>
                    
                    <a href=${url} style="align-items: center; background: #0095ff; border: 1px solid #0077cc; border-radius: 4px; text-decoration: none; color: white; padding: 13px 17px; display: inline-block;">
                        Complete your registration
                    </a>

                    <p>If you have any questions, just reply to this email—We're always happy to help out.</p>
                    <span>
                        Cheers,
                        Stack No Overflow
                    </span>
                </div>
            `,
        }

        const result = await smtpTransport.sendMail(mailOptions)
        return result
    } catch (err) {
        return err
    }
}
