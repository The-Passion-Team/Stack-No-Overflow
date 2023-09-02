import { Button, Row, Space, Typography } from "antd"
import React from "react"

const Four = () => {
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
                <Typography style={{ fontSize: 15 }}>Ignored Tags</Typography>
            </Row>

            <Row style={{ padding: "15px 20px" }} justify={"center"}>
                <Space direction="vertical" align="center">
                    <Button type="primary">Add an ignored tag</Button>
                </Space>
            </Row>
        </Space>
    )
}

export default Four
