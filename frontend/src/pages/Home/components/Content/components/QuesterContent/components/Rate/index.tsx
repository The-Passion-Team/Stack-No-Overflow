import { Row, Space, Typography } from "antd"

interface props {
    vote?: number
    answers?: number
    views?: number
}

const Rate = (props: props) => {
    return (
        <Space direction="vertical" align="end">
            <Row>
                <Typography>{props.vote || 0} vote</Typography>
            </Row>
            <Row>
                <Typography>{props.answers || 0} answers</Typography>
            </Row>
            <Row>
                <Typography>{props.views || 0} views</Typography>
            </Row>
        </Space>
    )
}

export default Rate
