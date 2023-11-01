import { model, Schema } from "mongoose"

export interface IMethodLogin {
    _id?: string
    name: string
}

const methodLoginSchema = new Schema<IMethodLogin>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const MethodLoginSchema = model<IMethodLogin>("MethodLogin", methodLoginSchema)

export default MethodLoginSchema
