import React from "react"
import { Layout } from "antd"
const { Content } = Layout

const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    paddingTop: 20,
    paddingBottom: 20,
}

interface ContentProps {
    children?: React.ReactNode
}

export function Feeder({ children }: ContentProps) {
    return <Content style={contentStyle}>{children}</Content>
}
