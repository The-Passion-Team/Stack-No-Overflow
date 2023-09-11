import { Space, Layout } from "antd"
import Container from "~/components/Container"
import { Feeder, Footer, Header, Sider } from "~/components/layouts"

type MainLayoutProps = {
    children: any
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout>
                <Header />
                <Container hasSider>
                    <Sider />
                    <Feeder children={props.children} />
                </Container>
                <Footer />
            </Layout>
        </Space>
    )
}

export default MainLayout
