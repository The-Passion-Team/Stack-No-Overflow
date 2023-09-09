import { Col, Row } from "antd"
import SideBar from "./components/Sidebar"
import MainBar from "./components/Mainbar"

export function Home() {
    return (
        <Row wrap={false} gutter={20}>
            <Col flex="auto">
                <MainBar />
            </Col>

            <Col flex="none">
                <SideBar />
            </Col>
        </Row>
    )
}
