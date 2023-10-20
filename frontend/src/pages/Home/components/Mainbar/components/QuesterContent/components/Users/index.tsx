import { UserOutlined } from "@ant-design/icons"
import { Avatar, Flex, Typography } from "antd"
import { Fragment } from "react"
import moment from "moment"

interface props {
    avatar?: string
    username?: string
    timepost?: string
}

const Users = ({ avatar, username, timepost }: props) => {
    return (
        <Flex wrap="wrap" gap="small">
            <Avatar shape="square" size="small" icon={avatar || <UserOutlined />} />
            <Typography.Link style={{ fontSize: 13 }}>{username}</Typography.Link>
            {timepost ? (
                <Typography style={{ fontSize: 13 }}>
                    asked {moment(timepost).locale("vi").fromNow()}
                </Typography>
            ) : (
                <Fragment />
            )}
        </Flex>
    )
}

export default Users
