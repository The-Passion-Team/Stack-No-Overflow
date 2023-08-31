import { Typography } from "antd"
import React from "react"

interface IContent {
    content: string
}

const styles = {
    fontSize: 28,
}

export function TitlePage( props: IContent ) {
    return <Typography.Text style={styles}>{props.content}</Typography.Text>
}

