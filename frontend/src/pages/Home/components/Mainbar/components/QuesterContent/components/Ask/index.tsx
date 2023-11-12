import { Typography } from "antd"
import { Path } from "~/routes"

interface IAsk {
    id?: string
    content?: string
    size?: number
}

const Ask = ({ id, content, size }: IAsk) => {
    return (
        <Typography.Link href={`${Path.Questions}/${id}`} style={{ fontSize: size }}>
            {content || "404!"}
        </Typography.Link>
    )
}

export default Ask
