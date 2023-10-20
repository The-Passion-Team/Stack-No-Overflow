import { Layout } from "antd"

interface props {
    children?: JSX.Element
}

const EmptyLayout = ({ children }: props) => {
    return <Layout>{children}</Layout>
}

export default EmptyLayout
