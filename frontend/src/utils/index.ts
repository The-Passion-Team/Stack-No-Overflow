export type Status = "idle" | "pending" | "succeeded" | "failed"
export type Error = "0" | "true" // 0 is not error, true is error

export const APIHost = "http://localhost:5000"
export const APIVer1 = "api/v1"
export const APIPaths = {
    Auth: `${APIHost}/${APIVer1}/auth`,
    Companies: `${APIHost}/companies`,
    Profile: `${APIHost}/profile`,
    Users: `${APIHost}/users`,
    Questions: `${APIHost}/questions`,
    Tags: `${APIHost}/${APIVer1}/tag`,
    Permissions: `${APIHost}/permissions`,
    Post: `${APIHost}/${APIVer1}/post`,
}
