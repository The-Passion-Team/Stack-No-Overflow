import { Layout } from "antd"
import "./styles.scss"

interface IContainer {
    children?: any
    hasSider?: boolean | undefined
}

const Container = ({ children, hasSider }: IContainer) => (
    <Layout hasSider={hasSider} className="snoContainer">
        {children}
    </Layout>
)

export default Container
