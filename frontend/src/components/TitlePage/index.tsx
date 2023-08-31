import { Typography } from "antd"
import React from "react"

interface props {
    content: string
}

const styles = {
    fontSize: 28,
}

const TitlePage: React.FC<props> = ({ content }) => {
    return <Typography.Text style={styles}>{content}</Typography.Text>
}

export default TitlePage
