import Post, { IPost } from "../models/Post"

namespace PostServices {
    export const createPost = async (data: IPost) => {
        try {
            const create = await Post.create(data)

            return {
                error: create ? null : true,
                message: create ? "Successful" : "Failed",
                data: create || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getAllPosts = async () => {
        try {
            const data = await Post.find()

            return {
                error: data ? null : true,
                message: data ? "Successful" : "Failed",
                data: data || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getPost = async (data: IPost) => {
        try {
            const post = await Post.findOne(data)

            console.log("post", post)

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
