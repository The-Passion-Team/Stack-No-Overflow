import Tag from "../models/Tag"
import Post, { IPost } from "../models/Post"

const updateTags = async (tags: string[], id_post: string) => {
    try {
        // has 2 type tags is avail tags and custom tags
        tags.map(async (tag: string) => {
            const find = await Tag.findOne({ name: tag }).select("-createdAt -updatedAt -__v")

            // find = true OK update _id of tag to tags props of Model Tags
            if (find) {
                await Post.updateOne({ _id: id_post }, { $push: { tags: find._id } })
            } else {
                await Post.updateOne({ _id: id_post }, { $push: { customTags: tag } })
            }
        })
    } catch (error) {
        return console.log("error", error)
    }
}

namespace PostServices {
    export const createPost = async (data: IPost, tags: string[]) => {
        try {
            // First, create new post with no tags
            const create = await Post.create(data)
            if (!create) return

            // Next, update tags
            updateTags(tags, create?._id)

            return {
                error: create ? 0 : true,
                message: create ? "Create Successful" : "Create Failed",
            }
        } catch (error) {
            return error
        }
    }

    export const getAllPosts = async () => {
        try {
            const data = await Post.find()
                .sort({ createdAt: -1 })
                .limit(20)
                .skip(0)
                .populate("auth", "displayname")
                .populate("tags", "name")

            return {
                error: data ? null : true,
                message: data ? "Successful" : "Failed",
                data: data,
            }
        } catch (error) {
            return error
        }
    }

    export const getPost = async (data: IPost) => {
        try {
            const post = await Post.findOne(data)
                .populate("auth", "displayname")
                .populate("tags", "name")

            return {
                error: post ? null : true,
                message: post ? "Successful" : "Failed",
                data: post || null,
            }
        } catch (error) {
            return error
        }
    }

    export const updatePost = async (data: IPost) => {
        try {
            const update = await Post.findOneAndUpdate({ _id: data._id }, data)

            return {
                error: update ? null : true,
                message: update ? "Update Successful" : "Update Failed",
                data: update || null,
            }
        } catch (error) {
            return error
        }
    }

    export const deletePost = async (data: IPost) => {
        try {
            const remove = await Post.findByIdAndDelete({ _id: data._id })

            return {
                error: remove ? null : true,
                message: remove ? "Delete Successful" : "Delete Failed",
                data: remove || null,
            }
        } catch (error) {
            return error
        }
    }
}

export default PostServices
