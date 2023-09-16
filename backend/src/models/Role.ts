import { model, Schema } from "mongoose"

export interface IRole {
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

// const role = new RoleSchema({ name: "admin" }, { name: "user" })
// await role.save()

export default RoleSchema
