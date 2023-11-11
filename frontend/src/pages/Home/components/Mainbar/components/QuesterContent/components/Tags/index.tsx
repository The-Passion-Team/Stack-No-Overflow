import "./tags.scss"
import { Flex, Typography } from "antd"
import { ITag } from "~/redux/tags/interfaces"
import { Fragment } from "react"

interface ITags {
    tags?: ITag[]
    customTags?: string[]
}

export const Tags = ({ tags, customTags }: ITags) => (
    <Flex gap="small" wrap="wrap">
        {tags?.length ? (
            tags.map((tag) => {
                return <Typography children={tag.name} className="tag" key={tag.name} />
            })
        ) : (
            <Fragment />
        )}
        {customTags?.length ? (
            customTags.map((tag) => {
                return <Typography children={tag} className="tag" key={tag} />
            })
        ) : (
            <Fragment />
        )}
    </Flex>
)

export default Tags
