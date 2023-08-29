import React from "react"
import { Space, Layout } from "antd"
import Header from "./components/Header"
import Sider from "./components/Sider"
import Footer from "./components/Footer"
import Feeder from "./components/Feeder"

type MainLayoutProps = {
    children: any
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout>
                <Header />
                <Layout hasSider className="snoContainer">
                    <Sider />
                    <Feeder page={props.children} />
                </Layout>
                <Footer />
            </Layout>
        </Space>
    )
}

export default MainLayout
