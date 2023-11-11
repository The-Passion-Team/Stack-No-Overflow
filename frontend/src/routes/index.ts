import OnlyHeaderLayout from "~/layouts/OnlyHeaderLayout"
import NoSiderLayout from "~/layouts/NoSiderLayout"
import EmptyLayout from "~/layouts/EmptyLayout"
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
    ValidateTokenSignUp,
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
    ActivationEmail: "/activation/:activationToken",
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
    { path: Path.Questions + "/:postId", page: Questions },
    { path: Path.Ask, page: PostQuestion, layout: NoSiderLayout },
    { path: Path.Tags, page: Tags },
    { path: Path.Users, page: Users },
    { path: Path.Companies, page: Companies },
    { path: Path.ActivationEmail, page: ValidateTokenSignUp, layout: EmptyLayout },
]
