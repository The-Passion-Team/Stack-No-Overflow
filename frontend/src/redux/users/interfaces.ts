import { Status } from "~/utils"

export interface UserData {
    _id?: string
    email?: string
    displayname?: string
    password?: string
    firstName?: string
    lastName?: string
    accessToken?: string
}

export interface UsersState {
    currentUser: {
        data: UserData[]
    }
    getUsers: {
        data: UserData[]
        status: Status
        error?: Error
    }
    createUser: {
        status: Status
        error?: Error
    }
    editUser: {
        status: Status
        error?: Error
    }
    deleteUser: {
        status: Status
        error?: Error
    }
}
