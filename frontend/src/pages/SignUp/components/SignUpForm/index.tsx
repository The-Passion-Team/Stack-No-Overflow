import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import "./SignUpForm.scss"
import Typography from "antd/es/typography/Typography"
import Link from "antd/es/typography/Link"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { AuthState, signupToAccount } from "~/redux/auth"
import { ThunkDispatch } from "@reduxjs/toolkit"

const SignUpForm = ({ setNotiRegistrationEmail, setEmailConfirm }: AuthState) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [displayname, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        console.log("displayname: ", displayname)
        setNotiRegistrationEmail(true)
        setEmailConfirm(email)
        dispatch(signupToAccount({ displayname, email, password }))
    }

    return (
        <Form
            name="normal_login"
            className="signup-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input
                    prefix={<SmileOutlined className="site-form-item-icon" />}
                    size="large"
                    placeholder="Display name"
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your Email!" }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    size="large"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    size="large"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                    Sign up
                </Button>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0, marginTop: 30 }}>
                <Typography style={{ fontSize: 12 }}>
                    By clicking “Sign up”, you agree to our{" "}
                    <Link style={{ fontSize: 12 }}>terms of service</Link> and acknowledge that you
                    have read and understand our{" "}
                    <Link style={{ fontSize: 12 }}>privacy policy</Link> and{" "}
                    <Link style={{ fontSize: 12 }}>code of conduct</Link>.
                </Typography>
            </Form.Item>
        </Form>
    )
}

export default SignUpForm
