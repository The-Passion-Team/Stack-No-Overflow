export type Status = "idle" | "pending" | "succeeded" | "failed"

export const APIHost = "http://localhost:5000"
export const APIVer1 = "api/v1"
export const APIPaths = {
    Auth: `${APIHost}/${APIVer1}/auth`,
    Companies: `${APIHost}/companies`,
    Profile: `${APIHost}/profile`,
    Users: `${APIHost}/users`,
    Questions: `${APIHost}/questions`,
    Tags: `${APIHost}/tags`,
    Permissions: `${APIHost}/permissions`,
}
