import { Typography } from "antd"

interface props {
    content: string
    size?: number
}

const Ask = ({ content, size }: props) => {
    return <Typography.Link style={{ fontSize: size }}>{content}</Typography.Link>
}

export default Ask
