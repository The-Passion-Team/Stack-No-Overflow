import { Col, Row } from "antd"
import SideBar from "./components/Sidebar"
import MainBar from "./components/Mainbar"
import "./styles/home.scss"

export function Home() {
    return (
        <Row wrap={false} gutter={20} className="snoHome">
            <Col flex="auto" className="mainbar">
                <MainBar />
            </Col>

            <Col flex="none" className="sidebar">
                <SideBar />
            </Col>
        </Row>
    )
}
