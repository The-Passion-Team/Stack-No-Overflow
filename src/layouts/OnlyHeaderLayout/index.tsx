import { Layout } from "antd"
import { Feeder, Header } from "~/components/layouts"

interface props {
    children?: JSX.Element
}

const OnlyHeaderLayout = ({ children }: props) => {
    return (
        <Layout>
            <Header />
            <Feeder>{children}</Feeder>
        </Layout>
    )
}

export default OnlyHeaderLayout
