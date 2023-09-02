import { Row, Space, Typography } from "antd"

const Second = () => {
    return (
        <Space
            direction="vertical"
            style={{
                display: "flex",
                flex: 1,
                border: "1px solid #ccc",
                borderRadius: 3,
                marginBottom: 8,
            }}
        >
            <Row
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#f4f4f4",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography style={{ fontSize: 15 }}>Custom filters</Typography>
            </Row>

            <Row style={{ padding: "5px 20px", paddingBottom: 10 }}>
                <Typography.Link style={{ fontSize: 13 }}>Create a custom filter</Typography.Link>
            </Row>
        </Space>
    )
}

export default Second
