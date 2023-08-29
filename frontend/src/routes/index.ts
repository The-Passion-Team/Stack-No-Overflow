import OnlyHeaderLayout from "~/layouts/OnlyHeaderLayout"
import Companies from "~/pages/Companies"
import Home from "~/pages/Home"
import LogIn from "~/pages/LogIn"
import Profile from "~/pages/Profile"
import Questions from "~/pages/Questions"
import SignUp from "~/pages/SignUp"
import Tags from "~/pages/Tags"
import Users from "~/pages/Users"

export const pathHome = "/"
export const pathLogin = "/login"
export const pathSignUp = "/signup"
export const pathProfile = "/profile"
export const pathQuestions = "/questions"
export const pathTags = "/tags"
export const pathUsers = "/users"
export const pathCompanies = "/companies"

type props = {
    path: string
    page: React.FC
    layout?: React.FC
}[]

export const routes: props = [
    { path: pathHome, page: Home },
    { path: pathLogin, page: LogIn, layout: OnlyHeaderLayout },
    { path: pathSignUp, page: SignUp, layout: OnlyHeaderLayout },
    { path: pathProfile, page: Profile },
    { path: pathQuestions, page: Questions },
    { path: pathTags, page: Tags },
    { path: pathUsers, page: Users },
    { path: pathCompanies, page: Companies },
]
