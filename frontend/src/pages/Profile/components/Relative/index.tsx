import {
    CalendarOutlined,
    ClockCircleOutlined,
    EditOutlined,
    GiftOutlined,
} from "@ant-design/icons"
import { Avatar, Button, Space, Typography, theme } from "antd"

interface IRelative {
    avatar?: any
    username: string
    joinedAt: string
    lastSeen?: string
    visited?: string
}

const Relative = ({ avatar, username, joinedAt, lastSeen, visited }: IRelative) => {
    const {
        token: { colorTextSecondary },
    } = theme.useToken()

    const dummy1 = [
        { icon: <GiftOutlined />, value: joinedAt },
        { icon: <ClockCircleOutlined />, value: lastSeen },
        { icon: <CalendarOutlined />, value: visited },
    ]

    return (
        <Space size="large" style={{ width: "100%", position: "relative", marginBottom: 16 }}>
            <Avatar
                shape="square"
                size={125}
                src={
                    avatar ||
                    "https://www.gravatar.com/avatar/b4f8a22050ff956ba540f1cdde76be6e?s=256&d=identicon&r=PG"
                }
                style={{ boxShadow: "0 0 8px 1px rgba(0,0,0,0.2)" }}
            />

            <Space direction="vertical" style={{ width: "100%" }}>
                <Typography style={{ fontWeight: 400, fontSize: 30 }}>{username}</Typography>

                <Space wrap size="middle">
                    {dummy1.map((item, index) => (
                        <Space key={index}>
                            {item.icon}
                            <Typography style={{ fontSize: 13, color: colorTextSecondary }}>
                                {item.value}
                            </Typography>
                        </Space>
                    ))}
                </Space>
            </Space>

            <Space style={{ position: "absolute", right: 0, top: 0 }}>
                <Button>
                    <EditOutlined />
                    Edit profile
                </Button>
            </Space>
        </Space>
    )
}

export default Relative
