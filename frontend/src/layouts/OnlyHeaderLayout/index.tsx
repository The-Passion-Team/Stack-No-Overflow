import { Layout, Space } from "antd"
import React from "react"
import {Header, Feeder} from "../MainLayout/components"

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
