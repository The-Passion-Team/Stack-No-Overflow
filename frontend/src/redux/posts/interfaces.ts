export interface IPost {
    _id?: string
    auth: string
    title: string
    problem: string
    tried: string
    votes?: string[]
    answers?: string[]
    views?: string[]
    tags?: string[]
    customTags?: string[]
}
