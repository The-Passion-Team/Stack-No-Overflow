import React from "react"
import { Col, Row } from "antd"
import Logo from "~/components/Logo"
import Brand from "~/components/Brand"
import { useNavigate } from "react-router-dom"
import { pathHome } from "~/routes"

const Web: React.FC = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(pathHome)
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
