import React from "react"
import { Col, Row } from "antd"

interface props {
    leftComponent: any
    rightComponent?: any
}

const Inrow = (props: props) => {
    return (
        <Row gutter={15} style={{ marginBottom: 10 }}>
            <Col flex="1 1 200px">{props.leftComponent}</Col>
            <Col flex="0 1 380px">{props.rightComponent}</Col>
        </Row>
    )
}

export default Inrow
