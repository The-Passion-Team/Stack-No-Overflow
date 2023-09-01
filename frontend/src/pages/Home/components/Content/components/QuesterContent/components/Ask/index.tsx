import { Typography } from "antd"

interface props {
    content: string
}

const Ask: React.FC<props> = ({ content }) => {
    return <Typography.Link style={{ fontSize: 17 }}>{content}</Typography.Link>
}

export default Ask
