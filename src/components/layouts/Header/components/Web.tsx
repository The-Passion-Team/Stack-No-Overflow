import React from "react"
import { Col, Row } from "antd"
import {Logo, Brand} from "~/components"
import { useNavigate } from "react-router-dom"
import { Path } from "~/routes"

const Web: React.FC = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(Path.Home)
    }

    return (
        <Row style={{ cursor: "pointer" }} onClick={onClick}>
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
