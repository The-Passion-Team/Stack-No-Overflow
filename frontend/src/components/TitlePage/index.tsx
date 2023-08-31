import { Typography } from "antd"
import React from "react"

interface props {
    content: string
}

const TitlePage: React.FC<props> = ({ content }) => {
    return <Typography.Title level={3}>{content}</Typography.Title>
}

export default TitlePage
