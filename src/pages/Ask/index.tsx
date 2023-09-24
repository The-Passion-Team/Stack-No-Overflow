import { Button, Space } from "antd"
import Header from "./components/Header"
import Inrow from "./components/Inrow"
import Title from "./components/Title"
import Notice from "./components/Notice"
import SuggestWritingTitle from "./components/SuggestWritingTitle"
import DetailProblem from "./components/DetailProblem"
import YouTry from "./components/YouTry"
import Tags from "./components/Tags"
import SuggestWritingDetail from "./components/SuggestWritingDetail"
import SuggestWritingTry from "./components/SuggestWritingTry"
import SuggestWritingTags from "./components/SuggestWritingTags"
import { useSelector } from "react-redux"
import { selectorFormAsk } from "~/redux/formAsk"

export function Ask() {
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
