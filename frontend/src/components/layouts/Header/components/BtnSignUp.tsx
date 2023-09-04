import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const BtnSignUp = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/signup")
    }

    return (
        <Button type="primary" style={{ margin: "0 8px" }} onClick={onClick}>
            Sign up
        </Button>
    )
}

export default BtnSignUp
