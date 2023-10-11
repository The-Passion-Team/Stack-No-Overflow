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

export const PostQuestion = () => {
    const form = useSelector(selectorFormAsk)

    const handleSubmit = () => {
        const title = form.title.data
        const detail = form.detail.data
        const expecting = form.try.data
        const tags = form.tags.data

        let data = {
            title,
            detail,
            expecting,
            tags,
        }

        console.log("data", data)
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
