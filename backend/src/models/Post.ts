import { model, Schema } from "mongoose"

export interface IPost {
    _id?: string
    auth: Schema.Types.ObjectId
    title: string
    content: string
    votes?: string[]
    answers?: string[]
    views?: string[]
    tags?: string[]
}

const postSchema = new Schema<IPost>(
    {
        auth: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: {
            type: [],
            default: [],
        },
        votes: {
            type: [],
            default: [],
        },
        answers: {
            type: [],
            default: [],
        },
        views: {
            type: [],
            default: [],
        },
    },
    { timestamps: true },
)

const PostSchema = model<IPost>("Post", postSchema)

export default PostSchema
