import "./tags.scss"
import { Flex, Typography } from "antd"
import { ITag } from "~/redux/tags/interfaces"

interface ITags {
    tags: ITag[]
    customTags: string[]
}

const Tags = ({ tags, customTags }: ITags) => (
    <Flex gap="small" wrap="wrap">
        {tags.map((tag) => {
            return <Typography children={tag.name} className="tag" key={tag.name} />
        })}
        {customTags.map((tag, index) => {
            return <Typography children={tag} className="tag" key={tag} />
        })}
    </Flex>
)

export default Tags
