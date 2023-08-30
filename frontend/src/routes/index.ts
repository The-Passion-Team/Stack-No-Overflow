import OnlyHeaderLayout from "~/layouts/OnlyHeaderLayout"
import Companies from "~/pages/Companies"
import Home from "~/pages/Home"
import LogIn from "~/pages/LogIn"
import Profile from "~/pages/Profile"
import Questions from "~/pages/Questions"
import SignUp from "~/pages/SignUp"
import Tags from "~/pages/Tags"
import Users from "~/pages/Users"

export const Path = {
    Home: "/",
    LogIn: "/login",
    SignUp: "/signup",
    Profile: "/profile",
    Questions: "/questions",
    Tags: "/tags",
    Users: "/users",
    Companies: "/companies"
}

type props = {
    path: string
    page: React.FC
    layout?: React.FC
}[]

export const routes: props = [
    { path: Path.Home, page: Home },
    { path: Path.LogIn, page: LogIn, layout: OnlyHeaderLayout },
    { path: Path.SignUp, page: SignUp, layout: OnlyHeaderLayout },
    { path: Path.Profile, page: Profile },
    { path: Path.Questions, page: Questions },
    { path: Path.Tags, page: Tags },
    { path: Path.Users, page: Users },
    { path: Path.Companies, page: Companies },
]
