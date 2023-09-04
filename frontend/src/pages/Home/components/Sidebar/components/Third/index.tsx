import { EyeOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Row, Space, Typography } from "antd"
import React from "react"

const Third = () => {
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
                    backgroundColor: "#00000005",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography style={{ fontSize: 15 }}>Watched Tags</Typography>
            </Row>

            <Row style={{ padding: "5px 20px", paddingBottom: 20 }}>
                <Space direction="vertical" align="center">
                    <SearchOutlined style={{ fontSize: 50, color: "#379FEF" }} />
                    <Space style={{ textAlign: "center", fontSize: 13, margin: "10px 0" }}>
                        Watch tags to curate your list of questions.
                    </Space>
                    <Button icon={<EyeOutlined />} type="primary">
                        Watch a tag
                    </Button>
                </Space>
            </Row>
        </Space>
    )
}

export default Third
