import {
    ApiOutlined,
    ExportOutlined,
    FacebookOutlined,
    GithubOutlined,
    GoogleOutlined,
    QuestionCircleOutlined,
    TagsOutlined,
    TrophyOutlined,
} from "@ant-design/icons"
import { Button, Layout, Row, Space, Typography } from "antd"
import SignUpForm from "./components/SignUpForm"
import { Link } from "react-router-dom"
import "./SignUp.scss"

const dummy1 = [
    { typ: "Get unstuck — ask a question", icon: <QuestionCircleOutlined /> },
    { typ: "Unlock new privileges like voting and commenting", icon: <ApiOutlined /> },
    { typ: "Save your favorite questions, answers, watch tags, and more", icon: <TagsOutlined /> },
    { typ: "Earn reputation and badges", icon: <TrophyOutlined /> },
]

export function SignUp() {
    return (
        <Layout id="signup-page">
            <Space className="container">
                <Space direction="vertical" style={{ width: 500 }} className="left">
                    <Space style={{ textAlign: "left" }}>
                        <Typography style={{ fontSize: 26 }}>
                            Join the Stack Overflow community
                        </Typography>
                    </Space>

                    <Space direction="vertical" style={{ marginTop: 10, marginBottom: 10 }}>
                        {dummy1.map((item, index) => {
                            return (
                                <Row key={index} className="rowText">
                                    {item.icon}
                                    <Typography>{item.typ}</Typography>
                                </Row>
                            )
                        })}
                    </Space>

                    <Space>
                        <Typography style={{ fontSize: 12 }}>
                            Collaborate and share knowledge with a private group for FREE. <br />
                            <Typography.Link style={{ fontSize: 12 }}>
                                Get Stack Overflow for Teams free for up to 50 users.
                            </Typography.Link>
                        </Typography>
                    </Space>
                </Space>

                <Space direction="vertical" style={{ width: 300 }}>
                    <Space direction="vertical" className="space">
                        <Button
                            icon={<GoogleOutlined />}
                            className="btnLogin"
                            style={{ backgroundColor: "#fff", fontSize: 13 }}
                        >
                            Log in with Google
                        </Button>
                        <Button
                            icon={<GithubOutlined />}
                            className="btnLogin"
                            style={{ backgroundColor: "#232629", color: "#fff", fontSize: 13 }}
                        >
                            Log in with GitHub
                        </Button>
                        <Button
                            icon={<FacebookOutlined />}
                            className="btnLogin"
                            style={{ backgroundColor: "#314A86", color: "#fff", fontSize: 13 }}
                        >
                            Log in with Facebook
                        </Button>
                    </Space>

                    <Space className="space">
                        <SignUpForm />
                    </Space>

                    <Space className="space" direction="vertical">
                        <Typography>
                            Already have an account?{" "}
                            <Link to="/login">
                                <Typography.Link>Log in</Typography.Link>
                            </Link>
                        </Typography>
                        <Typography>
                            Are you an employer?{" "}
                            <Typography.Link>
                                Sign up on Talent <ExportOutlined />
                            </Typography.Link>
                        </Typography>
                    </Space>
                </Space>
            </Space>
        </Layout>
    )
}
