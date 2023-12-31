import { Button, Space } from "antd"
import { useSelector } from "react-redux"
import { selectorFormAsk } from "~/redux/formAsk"
import {
    DetailProblem,
    Header,
    Inrow,
    Notice,
    SuggestWritingDetail,
    SuggestWritingTags,
    SuggestWritingTitle,
    SuggestWritingTry,
    Tags,
    Title,
    YouTry,
} from "./components"
import { selectorAuth } from "~/redux/auth/containers"
import { useAppDispatch } from "~/redux/store"
import { requestCreatePost } from "~/redux/posts/actions"
import Message from "~/components/Message"

export const PostQuestion = () => {
    const form = useSelector(selectorFormAsk)
    const currentUser_id = useSelector(selectorAuth)?.currentUser?._id
    console.log('currentUser_id', currentUser_id)
    const dispatch = useAppDispatch()

    const handleSubmit = async () => {
        const title = form.title.data
        const problem = form.detail.data
        const tried = form.try.data
        const tags = form.tags.data

        if (!currentUser_id || !title || !problem || !tried || !tags) return

        let data: any = {
            auth: currentUser_id,
            title,
            problem,
            tried,
            tags,
        }

        const response_post_question = await dispatch(requestCreatePost(data))

        const error = response_post_question?.payload?.error
        const message = response_post_question?.payload?.message

        Message(error, message)

        if (!error) window.location.href = "http://localhost:3000/"
    }

    return (
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Header title="Ask a public question" />
            <Inrow leftComponent={<Notice />} />
            <Inrow leftComponent={<Title />} rightComponent={<SuggestWritingTitle />} />
            <Inrow leftComponent={<DetailProblem />} rightComponent={<SuggestWritingDetail />} />
            <Inrow leftComponent={<YouTry />} rightComponent={<SuggestWritingTry />} />
            <Inrow leftComponent={<Tags />} rightComponent={<SuggestWritingTags />} />

            <Button
                type="primary"
                onClick={handleSubmit}
                disabled={form.tags.status === "succeeded" ? false : true}
            >
                Post your question
            </Button>
        </Space>
    )
}
