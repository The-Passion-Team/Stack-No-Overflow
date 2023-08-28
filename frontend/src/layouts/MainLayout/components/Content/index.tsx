import React from "react"
import { Layout } from "antd"

const { Content: ContentAntDesign } = Layout

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
}

type ContentProps = {
    page: any
}

const Content = (props: ContentProps) => {
    return <ContentAntDesign style={contentStyle}>{props.page}</ContentAntDesign>
}

export default Content
