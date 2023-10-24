import { Error, Status } from "~/utils"
import { UserData } from "../users/interfaces"

export interface AuthState {
    accessToken?: any
    _id?: any
    status?: Status
    currentUser?: UserData | null
    error?: Error
    message?: any
    setNotiRegistrationEmail?: any
    emailConfirm?: string
    setEmailConfirm?: any
}

export interface LoginPayload {
    email?: string
    password?: string
    navigate?: any
    userGoogle?: any
}

export interface SignupPayload {
    username: string
    email: string
    password: string
}

export interface ActivationPayload {
    activationToken: string
}

export interface LogoutPayload {
    userId: any
    headers: any
    navigate: any
}
