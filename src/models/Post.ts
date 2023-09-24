import { model, Schema } from "mongoose"

export interface IPost {
    title: string
    content: string
    votes: Array<string>
    answers: Array<string>
    views: Array<string>
    tags: Array<string>
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
        votes: {
            type: [],
            default: [],
        },
    },
    { timestamps: true },
)

const PostSchema = model<IPost>("Post", postSchema)

export default PostSchema
