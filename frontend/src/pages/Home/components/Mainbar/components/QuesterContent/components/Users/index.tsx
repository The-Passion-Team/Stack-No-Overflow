import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space, Typography } from "antd"

interface props {
    avatar?: string
    username: string
    timepost: string
}

const Users = ({ avatar, username, timepost }: props) => {
    return (
        <Space>
            <Avatar shape="square" size="small" icon={avatar || <UserOutlined />} />
            <Typography.Link style={{ fontSize: 13 }}>{username}</Typography.Link>
            <Typography style={{ fontSize: 13 }}>{timepost}</Typography>
        </Space>
    )
}

export default Users
