import React from "react"
import { Col, Row } from "antd"
import {Logo, Brand} from "~/components"

const Web: React.FC = () => {
    return (
        <Row style={{ cursor: "pointer" }}>
            <Col className="snoCenter">
                <Logo />
            </Col>
            <Col className="snoCenter">
                <Brand />
            </Col>
        </Row>
    )
}
export default Web
