import { model, Schema } from "mongoose"

export interface ITag {
    _id?: string
    name: string
}

const tagSchema = new Schema<ITag>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const TagSchema = model<ITag>("Tag", tagSchema)

export default TagSchema
