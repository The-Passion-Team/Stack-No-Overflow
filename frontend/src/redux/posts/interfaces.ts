import { Status } from "~/utils"
import { ITag } from "../tags/interfaces"
import { UserData } from "../users"

export interface IPost {
    _id?: string
    auth?: UserData
    title?: string
    problem?: string
    tried?: string
    votes?: string[]
    answers?: string[]
    views?: string[]
    tags?: ITag[]
    customTags?: string[]
    createdAt?: string
    updatedAt?: string
}

export interface IPostState {
    status?: Status
    error?: Error
    message?: any
    post?: IPost
    posts?: IPost[]
    setNotiRegistrationEmail?: any
    emailConfirm?: string
    setEmailConfirm?: any
}
