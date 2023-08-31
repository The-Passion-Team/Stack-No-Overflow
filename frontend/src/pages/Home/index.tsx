import { Col, Row } from "antd"
import React from "react"
import Content from "./components/Content"
import Righter from "./components/Righter"

const Home = () => {
    return (
        <Row>
            <Col flex="auto">
                <Content />
            </Col>

            <Col flex="none">
                <Righter />
            </Col>
        </Row>
    )
}

export default Home
