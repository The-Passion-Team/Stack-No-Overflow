import { UserOutlined } from "@ant-design/icons"
import { Avatar, Col, Row, Typography } from "antd"

interface props {
    avatar?: string
    username: string
    timepost: string
}

const Users = (props: props) => {
    return (
        <Row align="middle" justify="end" gutter={5}>
            <Col>
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </Col>
            <Col>
                <Typography.Link style={{ fontSize: 13 }}>{props.username}</Typography.Link>
            </Col>
            <Col>
                <Typography style={{ fontSize: 13 }}>{props.timepost}</Typography>
            </Col>
        </Row>
    )
}

export default Users
