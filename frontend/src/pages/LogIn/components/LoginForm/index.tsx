import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import "./LoginForm.scss"
import { useDispatch } from "react-redux"
import { LoginPayload, requestLogin } from "~/redux/auth"
import { AppDispatch } from "~/redux/store"

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>()

    const onFinish = (values: LoginPayload) => {
        console.log("Received values of form: ", values)
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
