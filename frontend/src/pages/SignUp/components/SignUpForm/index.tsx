import "./SignUpForm.scss"
import { Alert, Button, Form, Input } from "antd"
import Link from "antd/es/typography/Link"
import Typography from "antd/es/typography/Typography"
import { AuthState, signupToAccount } from "~/redux/auth"
import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { useAppDispatch } from "~/redux/store"
import { useSelector } from "react-redux"
import { selectorAuth } from "~/redux/auth/containers"
import { useEffect, useState, Fragment } from "react"

const SignUpForm = ({ setNotiRegistrationEmail, setEmailConfirm }: AuthState) => {
    const dispatch = useAppDispatch()
    const [alertMsg, setAlertMsg] = useState<AuthState>()
    const signUp = useSelector(selectorAuth)

    useEffect(() => {
        setAlertMsg(signUp)
    }, [signUp])

    const onFinish = async (values: any) => {
        const username = values?.name
        const email = values?.email
        const password = values?.password

        setEmailConfirm(email)
        const result = await dispatch(signupToAccount({ username, email, password }))
        if (result?.payload?.error === 0) setNotiRegistrationEmail(true)
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

            {alertMsg?.error === 1 ? (
                <Form.Item>
                    <Alert message={alertMsg.message} type="error" showIcon />
                </Form.Item>
            ) : (
                <Fragment />
            )}

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
