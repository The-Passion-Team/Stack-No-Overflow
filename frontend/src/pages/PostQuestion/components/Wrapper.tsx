import { Space } from "antd"
import React from "react"

interface IWrapper {
    children: any
}

const style: React.CSSProperties = {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.1)",
}

export const Wrapper = ({ children }: IWrapper) => {
    return (
        <Space direction="vertical" style={style}>
            {children}
        </Space>
    )
}
