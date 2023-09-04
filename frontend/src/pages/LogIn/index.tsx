import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons"
import { Button, Layout, Space, Typography } from "antd"
import LoginForm from "./components/LoginForm"
import { Logo } from "~/components"
import "./LogIn.scss"

export function LogIn() {
    return (
        <Layout id="login-page">
            <Space className="container">
                <Space className="space logo">
                    <Logo />
                </Space>

                <Space direction="vertical" className="space">
                    <Button
                        icon={<GoogleOutlined />}
                        className="btnLogin"
                        style={{ backgroundColor: "#fff", fontSize: 13 }}
                    >
                        Log in with Google
                    </Button>
                    <Button
                        icon={<GithubOutlined />}
                        className="btnLogin"
                        style={{ backgroundColor: "#232629", color: "#fff", fontSize: 13 }}
                    >
                        Log in with GitHub
                    </Button>
                    <Button
                        icon={<FacebookOutlined />}
                        className="btnLogin"
                        style={{ backgroundColor: "#314A86", color: "#fff", fontSize: 13 }}
                    >
                        Log in with Facebook
                    </Button>
                </Space>

                <Space className="space">
                    <LoginForm />
                </Space>

                <Space className="space" direction="vertical">
                    <Typography>
                        Don’t have an account? <Typography.Link>Sign up</Typography.Link>
                    </Typography>
                    <Typography>
                        Forgot Password? <Typography.Link>Change password</Typography.Link>
                    </Typography>
                </Space>
            </Space>
        </Layout>
    )
}
