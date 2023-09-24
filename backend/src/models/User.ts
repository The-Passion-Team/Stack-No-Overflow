import { model, Schema, SchemaDefinitionProperty } from "mongoose"

export interface IUser {
    username: string
    email: string
    password: string
    avatar: string
    role: SchemaDefinitionProperty
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
        role: {
            type: Schema.Types.ObjectId,
            ref: "Role",
            default: "6505da44751464ef46c01d22",
        },
    },
    { timestamps: true },
)

const User = model<IUser>("User", userSchema)

export default User
