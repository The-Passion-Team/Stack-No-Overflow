import React from "react"
import { Space, Layout } from "antd"
import {Header, Sider, Footer, Feeder} from "./components"

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
