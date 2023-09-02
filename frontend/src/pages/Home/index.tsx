import React from "react"
import { Col, Row } from "antd"
import Content from "./components/Content"
import Righter from "./components/Righter"

export function Home() {
    return (
        <Row wrap={false}>
            <Col flex="auto">
                <Content />
            </Col>

            <Col flex="none">
                <Righter />
            </Col>
        </Row>
    )
}

