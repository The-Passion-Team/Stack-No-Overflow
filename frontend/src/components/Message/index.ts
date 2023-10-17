import { message } from "antd"
import { Error } from "~/utils"

const Message = (err: Error, msg: string) => {
    if (err) {
        message.error(msg)
    } else {
        message.success(msg)
    }
}

export default Message
