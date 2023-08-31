import { Typography } from "antd"
import React from "react"

interface IContent {
    content: string
}

export function TitlePage(props: IContent) {
    return <Typography.Title level={3}>{props.content}</Typography.Title>
}


