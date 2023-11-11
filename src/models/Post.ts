import { model, Schema } from "mongoose"

export interface IPost {
    _id?: string
    auth: Schema.Types.ObjectId
    title: string
    problem: string
    tried: string
    votes?: string[]
    answers?: string[]
    views?: string[]
    tags?: Schema.Types.ObjectId[]
    customTags?: string[]
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
        problem: {
            type: String,
            required: true,
        },
        tried: {
            type: String,
            required: true,
        },
        tags: {
            type: [],
            ref: "Tag",
            default: [],
        },
        customTags: {
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
