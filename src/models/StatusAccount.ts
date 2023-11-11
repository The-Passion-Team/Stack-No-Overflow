import { model, Schema } from "mongoose"

export interface IStatusAccount {
    _id?: string
    name: string
}

const statusAccountSchema = new Schema<IStatusAccount>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const StatusAccountSchema = model<IStatusAccount>("StatusAccount", statusAccountSchema)

export default StatusAccountSchema
