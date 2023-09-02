import { AntDesignOutlined, HighlightOutlined, MessageOutlined } from "@ant-design/icons"
import { Space, Typography } from "antd"
import React from "react"
import "./styles.scss"

const dummy = [
    {
        title: "The Overflow Blog",
        items: [
            {
                icon: <HighlightOutlined />,
                value: "What it’s like being a professional workplace bestie (Ep. 603)",
            },
            {
                icon: <HighlightOutlined />,
                value: "Journey to the cloud part I: Migrating Stack Overflow Teams to Azure",
            },
        ],
    },
    {
        title: "Featured on Meta",
        items: [
            {
                icon: <MessageOutlined />,
                value: "Our Design Vision for Stack Overflow and the Stack Exchange network",
            },
            {
                icon: <AntDesignOutlined />,
                value: "Temporary policy: Generative AI (e.g., ChatGPT) is banned",
            },
            {
                icon: <AntDesignOutlined />,
                value: "Call for volunteer reviewers for an updated search experience: OverflowAI Search",
            },
            {
                icon: <AntDesignOutlined />,
                value: "Discussions experiment launching on NLP Collective",
            },
        ],
    },
    {
        title: "Hot Meta Posts",
        items: [
            {
                icon: "54",
                value: "Apache AGE (of Despair)",
            },
        ],
    },
]

const First = () => {
    return (
        <div className="root">
            {dummy.map((item, index) => {
                return (
                    <Space
                        direction="vertical"
                        key={index}
                        className="bg"
                        style={{ paddingBottom: 10 }}
                    >
                        <Space
                            className="padding title"
                            style={{
                                borderTop: "1px solid #ebda9d",
                                borderBottom: "1px solid #ebda9d",
                            }}
                        >
                            <Typography className="txt">{item.title}</Typography>
                        </Space>

                        {item.items.map((item, index) => {
                            return (
                                <Space key={index} style={{ padding: "0 20px" }}>
                                    {item.icon}
                                    <Typography className="txt">{item.value}</Typography>
                                </Space>
                            )
                        })}
                    </Space>
                )
            })}
        </div>
    )
}

export default First
