import { model, Schema } from "mongoose"

export interface IRole {
    _id?: string
    name: string
}

const roleSchema = new Schema<IRole>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const RoleSchema = model<IRole>("Role", roleSchema)

export default RoleSchema
