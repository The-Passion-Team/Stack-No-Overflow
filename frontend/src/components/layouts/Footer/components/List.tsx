import { Space, Typography } from "antd"
import React from "react"

const styleList: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "0 20px",
}

interface props {
    data: {
        title: string
        items: { value: string }[]
    }
}

const List: React.FC<props> = ({ data }) => {
    return (
        <Space style={styleList}>
            <Typography.Text className="footerTitle">{data?.title}</Typography.Text>
            <Space direction="vertical" align="start">
                {data?.items &&
                    data.items.map((item, index) => {
                        return (
                            <Typography.Text className="footerText" key={index}>
                                {item.value}
                            </Typography.Text>
                        )
                    })}
            </Space>
        </Space>
    )
}

export default List
