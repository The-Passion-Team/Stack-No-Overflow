import React from "react"
import { Layout, Row, Col } from "antd"
import Logo from "./components/Logo"
import SearchAutoComplete from "./components/SearchAutoComplete"
import NavRight from "./components/NavRight"

const { Header: HeaderAntDesign } = Layout

const headerStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ccc",
}

const Header = () => {
    return (
        <HeaderAntDesign style={headerStyle}>
            <Row gutter={30}>
                <Col className="snoCenter">
                    <Logo />
                </Col>

                <Col className="snoCenter snoMaxWidth">
                    <SearchAutoComplete />
                </Col>

                <Col>
                    <NavRight />
                </Col>
            </Row>
        </HeaderAntDesign>
    )
}

export default Header
