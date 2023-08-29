import { Layout, Space } from "antd"
import React from "react"
import Header from "../MainLayout/components/Header"
import Feeder from "../MainLayout/components/Feeder"

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
