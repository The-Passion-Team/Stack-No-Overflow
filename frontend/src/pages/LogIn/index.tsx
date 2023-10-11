import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons"
import { Button, Layout, Space, Typography } from "antd"
import LoginForm from "./components/LoginForm"
import { Logo } from "~/components"
import { Link, useParams } from "react-router-dom"
import "./LogIn.scss"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { activationEmail } from "~/redux/auth"
import { ThunkDispatch } from "@reduxjs/toolkit"

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
    const { activationToken } = useParams();
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	useEffect(() => {
		if (activationToken) {
			dispatch(activationEmail({activationToken}));
		}
	}, []);
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
