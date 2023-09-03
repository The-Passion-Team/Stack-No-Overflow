import { Space, Layout } from "antd"
import { Feeder, Footer, Header, Sider } from "~/components/layouts"

type MainLayoutProps = {
    children: any
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout style={{ backgroundColor: "#fff" }}>
                <Header />
                <Layout hasSider className="snoContainer" style={{ background: "#fff" }}>
                    <Sider />
                    <Feeder page={props.children} />
                </Layout>
                <Footer />
            </Layout>
        </Space>
    )
}

export default MainLayout
