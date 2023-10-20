import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User, { IUser } from "../models/User"
import { Middlewares, sendEmail } from "../middlewares"
import config from "../config/appConfig.config"

const generateActivationToken = (user: any) => {
    return jwt.sign(user, config.jwtSecret, { expiresIn: "10m" })
}

namespace AuthServices {
    export const signupServices = async (props: IUser) => {
        try {
            const email = props?.email
            const password = props?.password
            const username = props?.username

            if (!email || !password || !username) return

            //generate salt to hash password
            const salt = await bcrypt.genSalt(10)
            //set user password to hashed password
            const hashedPassword = await bcrypt.hash(password, salt)

            // Check username is already exists
            const checkUsername = await Middlewares.checkUsernameExists(username)
            if (checkUsername) return { error: 1, message: "Username not available" }

            // has 2 type tags is avail tags and custom tags
            const user = await User.findOne({ email })
            if (!user) {
                //create new user
                const newUser = {
                    username,
                    email,
                    password: hashedPassword,
                }

                const activationToken = generateActivationToken(newUser)
                const url = `${config.clientUrl}/activation/${activationToken}`
                sendEmail({ email, username, url })

                return { error: 0, message: "Please complete your registration." }
            } else {
                return { error: 1, message: "This email already exists." }
            }
        } catch (error) {
            return error
        }
    }

    export const activation = async (activationToken: string) => {
        try {
            const user: any = jwt.verify(activationToken, config.jwtSecret)
            console.log("user", user)
            const { username, email, password } = user
            const checkEmail = await User.findOne({ email })

            if (!checkEmail) {
                //create new user
                const newUser = new User({
                    username,
                    email,
                    password,
                })

                await newUser.save()

                return { error: 0, message: "Account has been activated!" }
            } else {
                return { error: 1, message: "This email already exists." }
            }
        } catch (error) {
            return error
        }
    }
}

export default AuthServices
