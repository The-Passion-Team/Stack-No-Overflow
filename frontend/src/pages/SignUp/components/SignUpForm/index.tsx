import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import "./SignUpForm.scss"
import Typography from "antd/es/typography/Typography"
import Link from "antd/es/typography/Link"

const SignUpForm = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
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
                rules={[{ required: true, message: "Please input your Email!" }]}
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
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    size="large"
                    type="password"
                    placeholder="Password"
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
