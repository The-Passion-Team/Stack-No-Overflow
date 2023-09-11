import { Layout } from "antd"
import React from "react"

interface IContainer {
    children?: any
    hasSider?: boolean | undefined
}

const style: React.CSSProperties = {
    background: "var(--main-bg-color)",
    paddingInline: "10vw",
}

const Container = ({ children, hasSider }: IContainer) => (
    <Layout hasSider={hasSider} style={style}>
        {children}
    </Layout>
)

export default Container
