import { model, Schema } from "mongoose"

export interface IPost {
    _id?: string,
    title: string
    content: string
    votes?: string[]
    answers?: string[]
    views?: string[]
    tags?: string[]
}

const postSchema = new Schema<IPost>(
    {
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
