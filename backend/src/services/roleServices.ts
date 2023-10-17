import Role, { IRole } from "../models/Role"

namespace RoleServices {
    export const createRole = async (data: IRole) => {
        try {
            // Check existence of role
            const check = await Role.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This role already exists",
                }

            const create = await Role.create(data)

            return {
                error: create ? null : true,
                message: create ? "Create Successful" : "Create Failure",
                data: create || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getAllRoles = async () => {
        try {
            const tags = await Role.find().select("_id name")

            return {
                error: tags ? null : true,
                message: tags ? "Get Successful" : "Get Failure",
                data: tags || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getRole = async (data: IRole) => {
        try {
            const tag = await Role.findOne(data).select("-createdAt -updatedAt -__v")

            console.log('tag', tag)

            return {
                error: tag ? null : true,
                message: tag ? "Successful" : "Not found this role",
                data: tag || null,
            }
        } catch (error) {
            return error
        }
    }

    export const updateRole = async (data: IRole) => {
        try {
            // Check existence of name role
            const check = await Role.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This role already exists",
                }

            const update = await Role.findOneAndUpdate({ _id: data._id }, data)

            return {
                error: update ? null : true,
                message: update ? "Update Successful" : "Update Failure",
            }
        } catch (error) {
            return error
        }
    }

    export const deleteRole = async (data: IRole) => {
        try {
            const remove = await Role.findByIdAndDelete({ _id: data._id })

            return {
                error: remove ? null : true,
                message: remove ? "Delete Successful" : "Delete Failure",
            }
        } catch (error) {
            return error
        }
    }
}

export default RoleServices
