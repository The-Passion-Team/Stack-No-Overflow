import React from "react"
import { Layout, Space } from "antd"
import { Feeder, Header } from "~/components/layouts"

interface props {
    children?: any
}

const OnlyHeaderLayout: React.FC<props> = ({ children }) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout>
                <Header />
                <Feeder page={children} />
            </Layout>
        </Space>
    )
}

export default OnlyHeaderLayout
