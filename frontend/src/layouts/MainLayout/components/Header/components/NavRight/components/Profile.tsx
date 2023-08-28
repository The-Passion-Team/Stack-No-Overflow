import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Space } from "antd"

const Profile: React.FC = () => {
    return (
        <Space style={{ padding: "0 10px" }}>
            <Badge count={0}>
                <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
        </Space>
    )
}

export default Profile
