import "./LoginForm.scss"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { LoginPayload, requestLogin } from "~/redux/auth"
import { selectorLogin } from "~/redux/auth/containers"
import { AppDispatch } from "~/redux/store"
import { useEffect } from "react"

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>()

    const resultLogin = useSelector(selectorLogin)

    useEffect(() => {
        console.log("resultLogin", resultLogin)
    }, [resultLogin])

    const onFinish = (values: LoginPayload) => {
        dispatch(requestLogin(values))
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
                rules={[
                    { type: "email", message: "The input is not valid Email!" },
                    { required: true, message: "Please input your Email!" },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    size="large"
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    size="large"
                    type="password"
                    placeholder="Password"
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
