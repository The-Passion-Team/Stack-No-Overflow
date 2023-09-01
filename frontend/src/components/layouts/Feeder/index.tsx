import React from "react"
import { Layout } from "antd"

const { Content: ContentAntDesign } = Layout

const contentStyle: React.CSSProperties = {
    padding: "20px 0",
}

type ContentProps = {
    page: any
}

export function Feeder(props: ContentProps) {
    return <ContentAntDesign style={contentStyle}>{props.page}</ContentAntDesign>
}
