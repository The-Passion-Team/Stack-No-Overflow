import MethodLogin, { IMethodLogin } from "../models/MethodLogin"

namespace MethodLoginServices {
    export const createOne = async (data: IMethodLogin) => {
        try {
            // Check existence of method login
            const check = await MethodLogin.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This method login already exists",
                }

            const create = await MethodLogin.create(data)

            return {
                error: create ? null : true,
                message: create ? "Create Successful" : "Create Failure",
                data: create || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getAll = async () => {
        try {
            const tags = await MethodLogin.find().select("_id name")

            return {
                error: tags ? null : true,
                message: tags ? "Get Successful" : "Get Failure",
                data: tags || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getOne = async (data: IMethodLogin) => {
        try {
            const method = await MethodLogin.findOne(data).select("-createdAt -updatedAt -__v")

            return {
                error: method ? null : true,
                message: method ? "Successful" : "Not found this method",
                data: method || null,
            }
        } catch (error) {
            return error
        }
    }

    export const updateOne = async (data: IMethodLogin) => {
        try {
            // Check existence of name role
            const check = await MethodLogin.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This method already exists",
                }

            const update = await MethodLogin.findOneAndUpdate({ _id: data._id }, data)

            return {
                error: update ? null : true,
                message: update ? "Update Successful" : "Update Failure",
            }
        } catch (error) {
            return error
        }
    }

    export const deleteOne = async (data: IMethodLogin) => {
        try {
            const remove = await MethodLogin.findByIdAndDelete({ _id: data._id })

            return {
                error: remove ? null : true,
                message: remove ? "Delete Successful" : "Delete Failure",
            }
        } catch (error) {
            return error
        }
    }
}

export default MethodLoginServices
