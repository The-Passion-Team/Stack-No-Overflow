import { BookOutlined, CaretDownOutlined, CaretUpOutlined, RedoOutlined } from "@ant-design/icons"
import { Button, Flex, Tooltip, Typography, theme } from "antd"
import { useSelector } from "react-redux"
import Tags from "~/pages/Home/components/Mainbar/components/QuesterContent/components/Tags"
import { selectorPosts } from "~/redux/posts/containers"

interface ILeftRate {
    voted?: number
}

const LeftRate = ({ voted = 0 }: ILeftRate) => {
    return (
        <Flex vertical align="center" gap="small">
            <Tooltip title="This question shows research effort; it is useful and clear">
                <Button shape="circle" icon={<CaretUpOutlined />} size="large" />
            </Tooltip>
            <Typography style={{ fontSize: 20 }}>{voted}</Typography>
            <Tooltip title="This question does not show any research effort; it is unclear or not useful">
                <Button shape="circle" icon={<CaretDownOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Save this question.">
                <Button shape="circle" type="text" icon={<BookOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Show activity on this post.">
                <Button shape="circle" type="text" icon={<RedoOutlined />} size="large" />
            </Tooltip>
        </Flex>
    )
}

interface IRightContent {
    content: string
}

const RightContent = ({ content }: IRightContent) => {
    const post = useSelector(selectorPosts)?.post
    const tags = post?.tags || []
    const customTags = post?.customTags || []

    return (
        <Flex vertical gap="middle">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <Tags tags={tags} customTags={customTags} />
        </Flex>
    )
}

interface IItem {
    content: string
}

const Item = ({ content }: IItem) => {
    return (
        <Flex gap="middle">
            <LeftRate voted={10} />
            <RightContent content={content} />
        </Flex>
    )
}

const Content = () => {
    const { marginLG } = theme.useToken().token
    const post = useSelector(selectorPosts)?.post

    const problem = post?.problem || ""
    const tried = post?.tried || ""
    const content = problem + tried

    return (
        <Flex style={{ marginLeft: marginLG }}>
            <Item content={content} />
        </Flex>
    )
}

export default Content
