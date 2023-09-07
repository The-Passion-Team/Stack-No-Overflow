import { model, Schema } from "mongoose"

export interface IUser {
    username: string
    email: string
    password: string
    avatar: string
    admin: boolean
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
)

const User = model<IUser>("User", userSchema)

export default User
