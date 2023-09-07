import { Space } from "antd"
import Header from "./components/Header"
import Inrow from "./components/Inrow"
import Title from "./components/Title"
import Notice from "./components/Notice"
import SuggestWritingTitle from "./components/SuggestWritingTitle"

export function Ask() {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Header />
            <Inrow leftComponent={<Notice />} />
            <Inrow leftComponent={<Title />} rightComponent={<SuggestWritingTitle />} />
        </Space>
    )
}
