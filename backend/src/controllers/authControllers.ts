import jwt from "jsonwebtoken"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User"
import HttpStatusCodes from "http-status-codes"
import AuthServices from "../services/authServices"
import config from "../config/appConfig.config"
import {Strategy} from 'passport-github2';
import passport from "passport"

namespace AuthControllers {
    export const generateAccessToken = (user: any) => {
        return jwt.sign(
            {
                id: user.id,
            },
            config.jwtAccess,
            { expiresIn: "60d" },
        )
    }

    export const generateRefreshToken = (user: any) => {
        return jwt.sign(
            {
                id: user.id,
            },
            config.jwtRefresh,
            { expiresIn: "365d" },
        )
    }

    export const login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            // find the user's email in the model
            const user = await User.findOne({ email }).select("+password")
            if (!user) {
                return res
                    .status(HttpStatusCodes.OK)
                    .send({ error: 1, message: "Email does not exist" })
            }

            if (!password || !user.password)
                return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
            //  compare the user-entered password with the hashed password
            const matchPassword = await bcrypt.compare(password, user.password)

            if (!matchPassword) {
                return res.status(HttpStatusCodes.OK).send({ error: 1, message: "Wrong password" })
            }

            // Not Error get data
            if (user && matchPassword) {
                //Generate access token
                const accessToken = generateAccessToken(user)
                //Generate refresh token
                const refreshToken = generateRefreshToken(user)

                //STORE REFRESH TOKEN IN COOKIE
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                const userLogin: any = await User.findOne({ email })
                    .select("-password -__v -updatedAt")
                    .populate({ path: "role", select: "-_id name" })
                    .exec()

                // Custom data return
                let data = new Object()
                data = userLogin._doc
                data = { ...data, accessToken }

                res.status(HttpStatusCodes.OK).json({
                    error: 0,
                    message: "Login Success!",
                    data: data,
                })
            }
        } catch (error: any) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
        }
    }

    export const loginWithGithub = async (req: Request, res: Response) => {
        try {
            interface user {
                user: any
            }
            
            passport.use(new Strategy({
                clientID: config.githubClientId,
                clientSecret: config.githubClientSecret,
                callbackURL: `https://github.com/login/oauth/authorize?client_id=${config.githubClientId}`
              },
              function(profile: any, done) {
                User.findOrCreate({ githubId: profile.id }, function (err, user) {
                  return done(err, user);
                });
              }
            ));
            const userGoogle = req.body.userGoogle

            // // find the user's email in the model
            // const user = await User.findOne({ email: userGoogle?.email }).select("+password")
            // if (!user) {
            //     return res
            //         .status(HttpStatusCodes.OK)
            //         .send({ error: 1, message: "Email does not exist" })
            // }

            // const id = await User.findOne({ email: user?.email })
            //     .select("-password -__v -updatedAt")
            //     .exec()

            // userGoogle["_id"] = id?._id

            // res.status(HttpStatusCodes.OK).json({
            //     error: 0,
            //     message: "Login Success!",
            //     data: userGoogle,
            // })
        } catch (error: any) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
        }
    }


    export const signup = async (req: Request, res: Response) => {
        try {
            const { username, email, password } = req.body
            const response = await AuthServices.signupServices({ email, password, username })
            res.status(HttpStatusCodes.OK).json(response)
        } catch (err: any) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
        }
    }

    export const activation = async (req: Request, res: Response) => {
        try {
            const { activationToken } = req.body
            const response = await AuthServices.activation(activationToken)
            return res.status(HttpStatusCodes.OK).json(response)
        } catch (err: any) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
        }
    }
}

export default AuthControllers
