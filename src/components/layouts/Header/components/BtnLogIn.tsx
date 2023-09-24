import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const BtnLogIn = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/login")
    }

    return (
        <Button style={{ margin: "0 8px" }} onClick={onClick}>
            Log in
        </Button>
    )
}

export default BtnLogIn
