import React from "react"
import { PF } from "~/utils/variables"
import { Col, Row } from "antd"

const Logo: React.FC = () => {
    return (
        <Row>
            <Col className="snoCenter">
                <img
                    src={PF + "/assets/Untitled_design-removebg-preview.png"}
                    alt="Logo"
                    style={{
                        height: 40,
                    }}
                />
            </Col>
            <Col className="snoCenter" >
                <img
                    src={PF + "/assets/Stack_No_Overflow__3_-removebg-preview.png"}
                    alt="Logo"
                    style={{
                        height: 40,
                    }}
                />
            </Col>
        </Row>
    )
}
export default Logo
