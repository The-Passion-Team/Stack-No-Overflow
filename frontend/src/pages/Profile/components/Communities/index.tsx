import { Divider, Row, Space, Typography, theme } from "antd"
import { Link } from "react-router-dom"

export const Communities = () => {
    const {
        token: { colorBorder, colorTextSecondary },
    } = theme.useToken()

    const dummyCommunities = [
        { name: "Stack No Overflow", value: 0 },
        { name: "reached", value: 0 },
    ]

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Row justify="space-between" align="middle">
                <Typography style={{ fontSize: 20 }}>Collectives</Typography>
                <Link to={""}>Edit</Link>
            </Row>
            <Space
                direction="vertical"
                split={<Divider style={{ backgroundColor: colorBorder, margin: 0 }} />}
                style={{
                    width: "100%",
                    border: `1px solid ${colorBorder}`,
                    borderRadius: 5,
                }}
            >
                {dummyCommunities.map((item, index) => (
                    <Space align="center" size={0} style={{ padding: "0 16px" }} key={index}>
                        <Typography style={{ fontSize: 16 }}>{item.value}</Typography>
                        <Typography style={{ fontSize: 13, color: colorTextSecondary }}>
                            {item.name}
                        </Typography>
                    </Space>
                ))}
            </Space>
        </Space>
    )
}
