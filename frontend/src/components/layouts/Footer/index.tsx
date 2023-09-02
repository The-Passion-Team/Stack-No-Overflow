import React from "react"
import { Col, Layout, Row, Typography } from "antd"
import { Logo } from "~/components"
import List from "./components/List"
import "./styles/Footer.css"

const { Footer: FooterAntDesign } = Layout

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "hsl(210,8%,15%)",
    boxShadow: "5px 5px rgba(0,0,0,0.2)",
    width: "100%",
}

const STACK = {
    title: "Stack No Overflow",
    items: [{ value: "Questions" }, { value: "Help" }],
}

const Products = {
    title: "Products",
    items: [
        { value: "Teams" },
        { value: "Advertising" },
        { value: "Collectives" },
        { value: "Talent" },
    ],
}

const COMPANY = {
    title: "COMPANY",
    items: [{ value: "About" }, { value: "Press" }, { value: "Work Here" }, { value: "Legal" }],
}

const STACKEXCHANGENETWORK = {
    title: "STACK EXCHANGE NETWORK",
    items: [
        { value: "Technology" },
        { value: "Culture & recreation" },
        { value: "Life & arts" },
        { value: "Science" },
        { value: "Professional" },
        { value: "Business" },
        { value: "API" },
        { value: "Data" },
    ],
}

const MEDIA = ["Blog", "Facebook", "Twitter", "LinkedIn", "Instagram"]

export function Footer() {
    return (
        <FooterAntDesign style={footerStyle}>
            <Row gutter={15}>
                <Col xs={24} lg={1}>
                    <Logo />
                </Col>
                <Col xs={24} lg={4}>
                    <List data={STACK} />
                </Col>
                <Col xs={24} lg={4}>
                    <List data={Products} />
                </Col>
                <Col xs={24} lg={4}>
                    <List data={COMPANY} />
                </Col>
                <Col xs={24} lg={5}>
                    <List data={STACKEXCHANGENETWORK} />
                </Col>
                <Col xs={24} lg={6}>
                    <Row
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            {MEDIA.map((item, index) => {
                                return (
                                    <Typography.Text
                                        className="footerText"
                                        style={{ padding: "0 5px" }}
                                        key={index}
                                    >
                                        {item}
                                    </Typography.Text>
                                )
                            })}
                        </Col>

                        <Col>
                            <Typography.Text className="footerText">
                                Site design / logo © 2023 Stack Exchange Inc; user contributions
                                licensed under CC BY-SA. rev 2023.8.24.43599
                            </Typography.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </FooterAntDesign>
    )
}
