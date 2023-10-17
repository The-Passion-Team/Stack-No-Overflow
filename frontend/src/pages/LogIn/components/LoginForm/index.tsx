import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import { LoginPayload, requestLogin } from "~/redux/auth"
import { selectorAuth } from "~/redux/auth/containers"
// import { selectorLogin } from "~/redux/auth/containers"
import { useAppDispatch } from "~/redux/store"

const LoginForm = () => {
    const dispatch = useAppDispatch()

    const auth = useSelector(selectorAuth)

    console.log("auth", auth)

    // const resultLogin = useSelector(selectorLogin)

    // useEffect(() => {
    //     console.log("resultLogin", resultLogin)
    // }, [resultLogin])

    // const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onFinish = (values: LoginPayload) => {
        // console.log(dispatch(requestLogin(values)))
        dispatch(requestLogin({ email, password, navigate }))
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
                    onChange={(e) => setEmail(e.target.value)}
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
