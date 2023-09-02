import { Row, Typography } from "antd"
import "./tags.scss"

type props = {
    listTags: string[]
}

const Tags: React.FC<props> = ({ listTags }) => {
    return (
        <Row align="middle" gutter={15}>
            {listTags.map((tag, index) => {
                return (
                    <Typography.Paragraph className="styles" key={index}>
                        {tag}
                    </Typography.Paragraph>
                )
            })}
        </Row>
    )
}

export default Tags
