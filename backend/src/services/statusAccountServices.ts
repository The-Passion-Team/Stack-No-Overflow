import StatusAccount, { IStatusAccount } from "../models/StatusAccount"

namespace StatusAccountServices {
    export const createStatus = async (data: IStatusAccount) => {
        try {
            // Check existence of StatusAccount
            const check = await StatusAccount.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This StatusAccount already exists",
                }

            const create = await StatusAccount.create(data)

            return {
                error: create ? null : true,
                message: create ? "Create Successful" : "Create Failure",
                data: create || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getAllStatus = async () => {
        try {
            const StatusAccounts = await StatusAccount.find().select("_id name")

            return {
                error: StatusAccounts ? null : true,
                message: StatusAccounts ? "Get Successful" : "Get Failure",
                data: StatusAccounts || null,
            }
        } catch (error) {
            return error
        }
    }

    export const getStatus = async (data: IStatusAccount) => {
        try {
            const status = await StatusAccount.findOne(data).select(
                "-createdAt -updatedAt -__v",
            )

            return {
                error: status ? null : true,
                message: status ? "Successful" : "Not found this status",
                data: status || null,
            }
        } catch (error) {
            return error
        }
    }

    export const updateStatus = async (data: IStatusAccount) => {
        try {
            // Check existence of name StatusAccount
            const check = await StatusAccount.findOne({ name: data.name })
            if (check)
                return {
                    error: true,
                    message: "This StatusAccount already exists",
                }

            const update = await StatusAccount.findOneAndUpdate({ _id: data._id }, data)

            return {
                error: update ? null : true,
                message: update ? "Update Successful" : "Update Failure",
            }
        } catch (error) {
            return error
        }
    }

    export const deleteStatus = async (data: IStatusAccount) => {
        try {
            const remove = await StatusAccount.findByIdAndDelete({ _id: data._id })

            return {
                error: remove ? null : true,
                message: remove ? "Delete Successful" : "Delete Failure",
            }
        } catch (error) {
            return error
        }
    }
}

export default StatusAccountServices
