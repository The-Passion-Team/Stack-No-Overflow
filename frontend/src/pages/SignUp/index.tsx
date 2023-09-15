import {
    ApiOutlined,
    ExportOutlined,
    QuestionCircleOutlined,
    TagsOutlined,
    TrophyOutlined,
} from "@ant-design/icons"
import { Button, Space, Typography } from "antd"
import SignUpForm from "./components/SignUpForm"
import { Link } from "react-router-dom"
import { MethodLogin } from "../LogIn"
import "./SignUp.scss"
import { RequestCheckMail } from "~/components"
import React, { useState } from "react"

const dummy1 = [
    { typ: "Get unstuck — ask a question", icon: <QuestionCircleOutlined /> },
    { typ: "Unlock new privileges like voting and commenting", icon: <ApiOutlined /> },
    { typ: "Save your favorite questions, answers, watch tags, and more", icon: <TagsOutlined /> },
    { typ: "Earn reputation and badges", icon: <TrophyOutlined /> },
]

export function SignUp() {
    const [notiRegistrationEmail, setNotiRegistrationEmail] = useState(false);
    const [emailConfirm, setEmailConfirm] = useState("")
    return (
        <div id="signup-page">
            {notiRegistrationEmail === false ? (
                <Space style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Space direction="vertical" size="large" style={{ width: 500 }}>
                        <Space style={{ textAlign: "left" }}>
                            <Typography style={{ fontSize: 26 }}>
                                Join the Stack Overflow community
                            </Typography>
                        </Space>

                        <Space direction="vertical">
                            {dummy1.map((item, index) => {
                                return (
                                    <Space align="center" key={index} className="rowText">
                                        {item.icon}
                                        <Typography>{item.typ}</Typography>
                                    </Space>
                                )
                            })}
                        </Space>

                        <Space>
                            <Typography style={{ fontSize: 12 }}>
                                Collaborate and share knowledge with a private group for FREE.{" "}
                                <br />
                                <Typography.Link style={{ fontSize: 12 }}>
                                    Get Stack Overflow for Teams free for up to 50 users.
                                </Typography.Link>
                            </Typography>
                        </Space>
                    </Space>

                    <Space direction="vertical" size="middle" style={{ width: 300 }}>
                        <Space direction="vertical" style={{ width: "100%" }}>
                            {MethodLogin.map((item, index) => (
                                <Button
                                    key={index}
                                    children={item.btn}
                                    icon={item.icon}
                                    size="large"
                                    style={{
                                        color: item.color,
                                        backgroundColor: item.backgroundColor,
                                        fontSize: 13,
                                        width: "100%",
                                    }}
                                />
                            ))}
                        </Space>

                        <SignUpForm setNotiRegistrationEmail={setNotiRegistrationEmail} setEmailConfirm={setEmailConfirm}/>

                        <Space className="space" direction="vertical" align="center">
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
            ) : (
                <RequestCheckMail emailConfirm={emailConfirm}/>
            )}
        </div>
    )
}
