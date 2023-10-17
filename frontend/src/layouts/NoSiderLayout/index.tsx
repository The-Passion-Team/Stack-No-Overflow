import { Layout } from "antd"
import Container from "~/components/Container"
import { Feeder, Footer, Header } from "~/components/layouts"

interface props {
    children?: JSX.Element
}

const NoSiderLayout = ({ children }: props) => {
    return (
        <Layout>
            <Header />
            <Container>
                <Feeder>{children}</Feeder>
            </Container>
            <Footer />
        </Layout>
    )
}

export default NoSiderLayout
