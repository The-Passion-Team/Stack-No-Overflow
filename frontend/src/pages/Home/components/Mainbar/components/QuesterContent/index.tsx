import { useEffect } from "react"
import Ask from "./components/Ask"
import Tags from "./components/Tags"
import Users from "./components/Users"
import Rate from "./components/Rate"
import { useSelector } from "react-redux"
import { Divider, Flex, FloatButton } from "antd"
import { selectorPosts } from "~/redux/posts/containers"
import { useAppDispatch } from "~/redux/store"
import { requestGetPosts } from "~/redux/posts/actions"

const QuesterContent = () => {
    let posts = useSelector(selectorPosts)?.posts || []
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(requestGetPosts())
    }, [dispatch])

    return (
        <>
            {posts.map((item, index) => {
                const postId = item?._id || ""
                const title = item?.title
                const tags = item?.tags || []
                const customTags = item?.customTags || []
                const _id_auth = item?.auth?._id
                const displayname = item?.auth?.displayname
                const vote = item.votes?.length
                const answers = item.answers?.length
                const views = item.views?.length
                const createdAt = item?.createdAt
                const avatar = item?.auth?.avatar || ""

                return (
                    <Flex key={index} vertical>
                        <Divider style={{ backgroundColor: "#ddd" }} />

                        <Flex gap="large" align="center">
                            <Rate vote={vote} answers={answers} views={views} />

                            <Flex vertical gap="middle" style={{ width: "100%" }}>
                                <Ask id={postId} content={title} size={16} />
                                <Flex gap="middle" justify="space-between" wrap="wrap">
                                    <Tags tags={tags} customTags={customTags} />
                                    <Users
                                        avatar={avatar}
                                        username={displayname || _id_auth}
                                        timepost={createdAt}
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                )
            })}

            <FloatButton.BackTop type="primary" />
        </>
    )
}

export default QuesterContent
