import { useNavigate } from "react-router"
import { Button } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { ButtonType } from "antd/es/button"

interface IButtonAskQuestion {
    children: string
    path: string
    type: ButtonType
    size: SizeType
}

const ButtonAskQuestion = ({ children, path, type, size }: IButtonAskQuestion) => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(path)
    }

    return <Button children={children} type={type} size={size} onClick={onClick} />
}

export default ButtonAskQuestion
