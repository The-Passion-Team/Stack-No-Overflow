import { Col, Row } from "antd"

interface props {
    leftComponent: JSX.Element
    rightComponent?: JSX.Element
}

const Inrow = ({ leftComponent, rightComponent }: props) => {
    return (
        <Row gutter={15}>
            <Col flex="1 1 200px">{leftComponent}</Col>
            <Col flex="0 1 380px">{rightComponent}</Col>
        </Row>
    )
}

export default Inrow
