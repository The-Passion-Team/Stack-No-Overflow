import "./SignUpForm.scss"
import { useState } from "react"
import { Button, Form, Input } from "antd"
import Link from "antd/es/typography/Link"
import Typography from "antd/es/typography/Typography"
import { AuthState, signupToAccount } from "~/redux/auth"
import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { useAppDispatch } from "~/redux/store"

const SignUpForm = ({ setNotiRegistrationEmail, setEmailConfirm }: AuthState) => {
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        console.log("username: ", username)
        setNotiRegistrationEmail(true)
        setEmailConfirm(email)
        dispatch(signupToAccount({ username, email, password }))
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
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    { type: "email", message: "The input is not valid E-mail!!" },
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
