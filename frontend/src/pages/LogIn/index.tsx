import { Flex, Typography } from "antd"
import LoginForm from "./components/LoginForm"
import { Logo } from "~/components"
import { Link } from "react-router-dom"
import SignInGoogleButton from "./components/SignInGoogleButton"
import MethodLoginOther from "./components/MethodLoginOther"

export function LogIn() {
    return (
        <Flex align="center" justify="center" style={{ minHeight: "calc(100vh - 104px)" }}>
            <Flex
                gap="middle"
                vertical
                align="center"
                style={{ minWidth: 280, width: 280, height: "100%" }}
            >
                <Logo />

                <Flex vertical gap="small" style={{ width: "100%" }}>
                    <SignInGoogleButton />
                    <MethodLoginOther />
                </Flex>

                <LoginForm />

                <Flex align="center" justify="center" vertical>
                    <Typography>
                        Don’t have an account? <Link to="/signup">Sign up</Link>
                    </Typography>
                    <Typography>
                        Forgot Password? <Link to="/signup"> Change password </Link>
                    </Typography>
                </Flex>
            </Flex>
        </Flex>
    )
}
