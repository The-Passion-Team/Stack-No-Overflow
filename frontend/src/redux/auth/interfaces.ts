import { Status } from "~/utils"
import { UserData } from "../users/interfaces"

export interface AuthState {
    status?: Status
    currentUser?: UserData
    error?: Error
    message?: any
    setNotiRegistrationEmail?: any
    emailConfirm?: string
    setEmailConfirm?: any
    data?: any
    login?: {
        status?: Status
        message?: string | null
        error?: null
    }
}

export interface LoginPayload {
    email: string
    password: string
}

export interface SignupPayload {
    displayname: string
    email: string
    password: string
}
