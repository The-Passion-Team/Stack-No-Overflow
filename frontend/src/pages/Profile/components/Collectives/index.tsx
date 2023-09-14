import { Divider, Space, Typography, theme } from "antd"

interface ICollectives {
    reputation?: number
    reached?: number
    answers?: number
    questions?: number
}

const Collectives = ({ reputation, reached, answers, questions }: ICollectives) => {
    const {
        token: { colorBorder, colorTextSecondary },
    } = theme.useToken()

    const dummyCollectives = [
        { name: "reputation", value: reputation || 0 },
        { name: "reached", value: reached || 0 },
        { name: "answers", value: answers || 0 },
        { name: "questions", value: questions || 0 },
    ]

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Typography style={{ fontSize: 20 }}>Collectives</Typography>
            <Space
                direction="vertical"
                split={<Divider style={{ backgroundColor: colorBorder, margin: 0 }} />}
                style={{
                    width: "100%",
                    border: `1px solid ${colorBorder}`,
                    borderRadius: 5,
                }}
            >
                {dummyCollectives.map((item, index) => (
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

export default Collectives
