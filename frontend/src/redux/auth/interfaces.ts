import { Error, Status } from "~/utils"
import { UserData } from "../users/interfaces"

export interface AuthState {
    status?: Status
    currentUser?: UserData | null
    error?: Error
    message?: any
    setNotiRegistrationEmail?: any
    emailConfirm?: string
    setEmailConfirm?: any
    data?: any
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
