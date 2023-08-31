import React from "react"
import { Space, Layout } from "antd"
import { Header, Sider, Footer, Feeder } from "./components"

type MainLayoutProps = {
    children: any
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout style={{ backgroundColor: "var(--main-bg-color)" }}>
                <Header />
                <Layout hasSider className="snoContainer" style={{ backgroundColor: "var(--main-bg-color)" }}>
                    <Sider />
                    <Feeder page={props.children} />
                </Layout>
                <Footer />
            </Layout>
        </Space>
    )
}

export default MainLayout
