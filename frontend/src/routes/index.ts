import OnlyHeaderLayout from "~/layouts/OnlyHeaderLayout"
import NoSiderLayout from "~/layouts/NoSiderLayout"
import {
    PostQuestion,
    Companies,
    Home,
    LogIn,
    Profile,
    Questions,
    SignUp,
    Tags,
    Users,
} from "~/pages"

export const Path = {
    Home: "/",
    LogIn: "/login",
    SignUp: "/signup",
    RequestCheckMail: "/signup/checkMail",
    Profile: "/profile",
    Questions: "/questions",
    Tags: "/tags",
    Users: "/users",
    Companies: "/companies",
    Ask: "/questions/ask",
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
    { path: Path.Ask, page: PostQuestion, layout: NoSiderLayout },
    { path: Path.Tags, page: Tags },
    { path: Path.Users, page: Users },
    { path: Path.Companies, page: Companies },
]