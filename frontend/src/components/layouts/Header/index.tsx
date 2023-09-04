import React from "react"
import { Layout, Row, Col } from "antd"
import SearchAutoComplete from "./components/SearchAutoComplete"
import NavRight from "./components/NavRight"
import Web from "./components/Web"
import { useSelector } from "react-redux"
import { selectorCurrentUser } from "~/redux/authSlice"
import BtnLogIn from "./components/BtnLogIn"
import BtnSignUp from "./components/BtnSignUp"

const { Header: HeaderAntDesign } = Layout

const headerStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ccc",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 99,
}

export function Header() {
    const currentUser = useSelector(selectorCurrentUser)?.data

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
                    {currentUser ? (
                        <NavRight />
                    ) : (
                        <>
                            <BtnLogIn />
                            <BtnSignUp />
                        </>
                    )}
                </Col>
            </Row>
        </HeaderAntDesign>
    )
}
