import { AuthState } from "./auth"
import { FormAskState } from "./formAsk/interfaces"
import { IPostState } from "./posts/interfaces"
import { UsersState } from "./users"

export interface RootState {
    auth: AuthState
    users: UsersState
    formAsk: FormAskState
    posts: IPostState
}
