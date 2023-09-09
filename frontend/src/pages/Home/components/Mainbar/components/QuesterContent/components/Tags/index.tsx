import { Space, Typography } from "antd"
import "./tags.scss"
interface ITags {
    listTags: string[]
}

const Tags = ({ listTags }: ITags) => (
    <Space align="center">
        {listTags.map((tag, index) => (
            <Typography children={tag} className="tag" key={index} />
        ))}
    </Space>
)

export default Tags
