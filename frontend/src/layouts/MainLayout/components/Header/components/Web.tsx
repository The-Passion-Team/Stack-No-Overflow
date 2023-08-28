import React from "react"
import { Col, Row } from "antd"
import Logo from "~/components/Logo"
import Brand from "~/components/Brand"

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
