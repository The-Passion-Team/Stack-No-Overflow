import React from "react"
import { Layout, Row, Col } from "antd"
import SearchAutoComplete from "./components/SearchAutoComplete"
import NavRight from "./components/NavRight"
import Web from "./components/Web"

const { Header: HeaderAntDesign } = Layout

const headerStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ccc",
}

export function Header() {
    return (
        <HeaderAntDesign style={headerStyle}>
            <Row gutter={30}>
                <Col className="snoCenter">
                    <Web />
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
