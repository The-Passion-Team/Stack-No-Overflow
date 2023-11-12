import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Space } from "antd"
import { useNavigate } from "react-router-dom"
import { Path } from "~/routes"
import { useSelector } from "react-redux"
import { selectorAuth } from "~/redux/auth/containers"

const Profile: React.FC = () => {
    const navigate = useNavigate()
    const avatar = useSelector(selectorAuth)?.currentUser?.picture

    console.log("avatar", avatar)

    const onClick = () => {
        navigate(Path.Profile)
    }

    return (
        <Space style={{ padding: "0 10px" }} onClick={onClick}>
            <Badge count={0}>
                <Avatar shape="square" icon={<UserOutlined />} src={avatar} />
            </Badge>
        </Space>
    )
}

export default Profile
