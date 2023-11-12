import { Flex, Typography, theme } from "antd"
import ButtonAskQuestion from "~/pages/Home/components/Mainbar/components/HeaderContent/components/ButtonAskQuestion"
import { Path } from "~/routes"
import moment from "moment"
import { useSelector } from "react-redux"
import { selectorPosts } from "~/redux/posts/containers"

export const HeadBar = () => {
    const { padding, marginLG, colorBorder } = theme.useToken().token
    const post = useSelector(selectorPosts)?.post

    const title = post?.title || ""
    const createdAt = post?.createdAt || ""
    const updatedAt = post?.updatedAt || ""
    const viewed = post?.views?.length || 0

    return (
        <Flex
            justify="space-between"
            align="center"
            style={{
                marginLeft: marginLG,
                paddingBottom: padding,
                borderBottom: `1px solid ${colorBorder}`,
            }}
        >
            <Flex vertical gap="small">
                <Flex>
                    <Typography
                        style={{
                            fontSize: 28,
                        }}
                    >
                        {title}
                    </Typography>
                </Flex>

                <Flex gap="large">
                    <Typography style={{ fontSize: 13 }}>
                        {moment(createdAt).locale("vi").fromNow()}
                    </Typography>
                    <Typography style={{ fontSize: 13 }}>
                        {moment(updatedAt).locale("vi").fromNow()}
                    </Typography>
                    <Typography style={{ fontSize: 13 }}>Viewed {viewed} times</Typography>
                </Flex>
            </Flex>

            <Flex>
                <ButtonAskQuestion
                    children="Ask question"
                    path={Path.Ask}
                    type="primary"
                    size="large"
                />
            </Flex>
        </Flex>
    )
}
