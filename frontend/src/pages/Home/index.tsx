import { Col, Row } from "antd"
import SideBar from "./components/Sidebar"
import MainBar from "./components/Mainbar"
import "./styles/home.scss"
import HeaderContent from "./components/Mainbar/components/HeaderContent"

export function Home() {
    return (
        <Row wrap={false} gutter={20} className="snoHome">
            <Col flex="auto" className="mainbar">
                <MainBar HeaderMain={<HeaderContent titleCnt={"Top Questions"} />}/>
            </Col>

            <Col flex="none" className="sidebar">
                <SideBar />
            </Col>
        </Row>
    )
}
