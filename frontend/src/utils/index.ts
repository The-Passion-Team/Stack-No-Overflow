export type Status = "succeeded" | "pending" | "failed";

export const APIBase = "http://localhost:5000";
export const APIPaths = {
	Auth: `${APIBase}/auth`,
	Companies: `${APIBase}/companies`,
	Profile: `${APIBase}/profile`,
	Users: `${APIBase}/users`,
	Questions: `${APIBase}/questions`,
	Tags: `${APIBase}/tags`,
	Permissions: `${APIBase}/permissions`
};
