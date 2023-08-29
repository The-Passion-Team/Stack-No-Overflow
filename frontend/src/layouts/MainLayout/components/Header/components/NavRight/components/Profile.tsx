import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Space } from "antd"
import { useNavigate } from "react-router-dom"
import { pathProfile } from "~/routes"

const Profile: React.FC = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(pathProfile)
    }

    return (
        <Space style={{ padding: "0 10px" }} onClick={onClick}>
            <Badge count={0}>
                <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
        </Space>
    )
}

export default Profile