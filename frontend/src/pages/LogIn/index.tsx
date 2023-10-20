import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons"
import { Button, Flex, Typography } from "antd"
import LoginForm from "./components/LoginForm"
import { Logo } from "~/components"
import { Link } from "react-router-dom"

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
                    {MethodLogin.map((item, index) => (
                        <Button
                            key={index}
                            children={item.btn}
                            icon={item.icon}
                            style={{
                                color: item.color,
                                backgroundColor: item.backgroundColor,
                                fontSize: 13,
                                height: 40,
                            }}
                        />
                    ))}
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

export const MethodLogin = [
    { btn: "Log in with Google", icon: <GoogleOutlined />, color: "", backgroundColor: "#fff" },
    {
        btn: "Log in with GitHub",
        icon: <GithubOutlined />,
        color: "#fff",
        backgroundColor: "#232629",
    },
    {
        btn: "Log in with Facebook",
        icon: <FacebookOutlined />,
        color: "#fff",
        backgroundColor: "#314A86",
    },
]
