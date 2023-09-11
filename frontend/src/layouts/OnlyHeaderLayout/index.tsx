import { Layout } from "antd"
import Container from "~/components/Container"
import { Feeder, Header } from "~/components/layouts"

interface props {
    children?: JSX.Element
}

const OnlyHeaderLayout = ({ children }: props) => {
    return (
        <Layout>
            <Header />
            <Container>
                <Feeder>{children}</Feeder>
            </Container>
        </Layout>
    )
}

export default OnlyHeaderLayout
