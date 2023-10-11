import mongoose, { model, Schema, SchemaDefinitionProperty } from "mongoose"
import { IRole } from "./Role"

export interface IUser {
    displayname: string
    email: string
    password: string
    avatar: string
    role: IRole
}

const userSchema = new Schema<IUser>(
    {
        displayname: {
            type: String,
            required: true,
            unique: true,
        },   
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
        role: {
            type: mongoose.Types.ObjectId,
            ref: "Role",
        },
    },
    { timestamps: true },
)

userSchema.pre("save", function (next) {
    this.role == null ? (this.role === "6505da44751464ef46c01d22") : null
    next()
})

const User = model<IUser>("User", userSchema)

export default User
