import Tag, { ITag } from "./../models/Tag"

namespace TagServices {
    export const createTag = async (data: ITag) => {
        try {
            // Check existence of tag
            const check = await Tag.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This tag already exists",
                }

            const create = await Tag.create(data)

            return {
                error: create ? null : true,
                message: create ? "Create Successful" : "Create Failure",
                data: create || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getAllTags = async () => {
        try {
            const tags = await Tag.find().select("_id name")

            return {
                error: tags ? null : true,
                message: tags ? "Get Successful" : "Get Failure",
                data: tags || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getTag = async (data: ITag) => {
        try {
            const tag = await Tag.findOne(data).select("-createdAt -updatedAt -__v")

            return {
                error: tag ? null : true,
                message: tag ? "Successful" : "Not found this tag",
                data: tag || null,
            }
        } catch (error) {
            return error
        }
    }

    export const updateTag = async (data: ITag) => {
        try {
            // Check existence of name tag
            const check = await Tag.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This tag already exists",
                }

            const update = await Tag.findOneAndUpdate({ _id: data._id }, data)

            return {
                error: update ? null : true,
                message: update ? "Update Successful" : "Update Failure",
            }
        } catch (error) {
            return error
        }
    }

    export const deleteTag = async (data: ITag) => {
        try {
            const remove = await Tag.findByIdAndDelete({ _id: data._id })

            return {
                error: remove ? null : true,
                message: remove ? "Delete Successful" : "Delete Failure",
            }
        } catch (error) {
            return error
        }
    }
}

export default TagServices
