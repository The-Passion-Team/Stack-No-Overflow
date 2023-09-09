import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons"
import { Button, Layout, Space, Typography } from "antd"
import LoginForm from "./components/LoginForm"
import { Logo } from "~/components"
import { Link } from "react-router-dom"
import "./LogIn.scss"

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

export function LogIn() {
    return (
        <Layout id="login-page">
            <Space className="container">
                <Space className="space logo">
                    <Logo />
                </Space>

                <Space direction="vertical" className="space">
                    {MethodLogin.map((item, index) => (
                        <Button
                            key={index}
                            children={item.btn}
                            icon={item.icon}
                            className="btnLogin"
                            style={{
                                color: item.color,
                                backgroundColor: item.backgroundColor,
                                fontSize: 13,
                            }}
                        />
                    ))}
                </Space>

                <Space className="space">
                    <LoginForm />
                </Space>

                <Space className="space" direction="vertical">
                    <Typography>
                        Don’t have an account?{" "}
                        <Link to="/signup">
                            <Typography.Link>Sign up</Typography.Link>
                        </Link>
                    </Typography>
                    <Typography>
                        Forgot Password? <Link to="/signup"> Change password </Link>
                    </Typography>
                </Space>
            </Space>
        </Layout>
    )
}
