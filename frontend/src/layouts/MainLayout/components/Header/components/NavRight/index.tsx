import React from "react"
import { Row, Col } from "antd"
import Profile from "./components/Profile"
import ListDropdown from "./components/ListDropdown"

const NavRight: React.FC = () => {
    return (
        <Row gutter={16}>
            <Col>
                <Profile />
            </Col>
            <Col>
                <ListDropdown />
            </Col>
        </Row>
    )
}

export default NavRight
