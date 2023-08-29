import OnlyHeaderLayout from "~/layouts/OnlyHeaderLayout"
import Home from "~/pages/Home"
import LogIn from "~/pages/LogIn"
import Profile from "~/pages/Profile"
import SignUp from "~/pages/SignUp"

type props = {
    path: string
    page: React.FC
    layout?: React.FC
}[]

export const routes: props = [
    { path: "/", page: Home },
    { path: "/login", page: LogIn, layout: OnlyHeaderLayout },
    { path: "/SignUp", page: SignUp, layout: OnlyHeaderLayout },
    { path: "/profile", page: Profile },
]
