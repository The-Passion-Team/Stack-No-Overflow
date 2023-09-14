import { Col, Row, Space, Typography, theme } from "antd"

interface IStats {
    reputation?: number
    reached?: number
    answers?: number
    questions?: number
}

const Stats = ({ reputation, reached, answers, questions }: IStats) => {
    const {
        token: { colorBorder, colorTextSecondary },
    } = theme.useToken()

    const dummyStats = [
        { name: "reputation", value: reputation || 0 },
        { name: "reached", value: reached || 0 },
        { name: "answers", value: answers || 0 },
        { name: "questions", value: questions || 0 },
    ]

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Typography style={{ fontSize: 20 }}>Stats</Typography>
            <Row
                gutter={[8, 16]}
                style={{ border: `1px solid ${colorBorder}`, borderRadius: 5, padding: 16 }}
            >
                {dummyStats.map((item, index) => (
                    <Col key={index} xs={24 / 4} lg={12}>
                        <Space direction="vertical" size={0}>
                            <Typography style={{ fontSize: 16 }}>{item.value}</Typography>
                            <Typography style={{ fontSize: 13, color: colorTextSecondary }}>
                                {item.name}
                            </Typography>
                        </Space>
                    </Col>
                ))}
            </Row>
        </Space>
    )
}

export default Stats
