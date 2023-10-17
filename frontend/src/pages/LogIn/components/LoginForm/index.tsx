import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input } from "antd"
import { LoginPayload, requestLogin } from "~/redux/auth"
import { useAppDispatch } from "~/redux/store"

const LoginForm = () => {
    const [loadings, setLoadings] = useState<boolean[]>([])
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onFinish = (values: LoginPayload) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings]
            newLoadings[0] = true
            return newLoadings
        })

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings]
                newLoadings[0] = false
                return newLoadings
            })
            dispatch(requestLogin({ email, password, navigate }))
        }, 1500)
    }

    return (
        <Flex style={{ width: "100%" }}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: "100%" }}
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
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{ width: "100%" }}
                        loading={loadings[0]}
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    )
}

export default LoginForm
