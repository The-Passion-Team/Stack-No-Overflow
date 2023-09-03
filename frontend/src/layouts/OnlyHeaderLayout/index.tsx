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
                <Layout
                    style={{
                        backgroundColor: "#f1f2f3",
                        position: "relative",
                        height: "calc(100vh - 64px)",
                    }}
                >
                    <Feeder page={children} />
                </Layout>
            </Layout>
        </Space>
    )
}

export default OnlyHeaderLayout
