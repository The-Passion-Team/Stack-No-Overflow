import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit"
import { loginToAccount } from "~/redux/auth"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import "./LoginForm.scss"

const LoginForm = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        dispatch(loginToAccount({ email, password, navigate}))
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
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
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
