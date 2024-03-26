import { Layout, Row, Space } from "antd"
import { Filter, Title } from "~/components/contents"
import { Path } from "~/routes"
import ButtonAskQuestion from "./components/ButtonAskQuestion"
import { ReactNode } from "react"

const style1 = {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "var(--main-bg-color)",
}

const dummyData = [
    { name: "Interesting" },
    { name: "Bountied" },
    { name: "Hot" },
    { name: "Week" },
    { name: "Month" },
]

type HeaderCnt = {
    titleCnt: string
    children?: ReactNode
}

const HeaderContent = (HeaderCnt: HeaderCnt) => {
    return (
        <Layout style={style1}>
            <Space direction="vertical" size="middle">
                <Row align="middle" justify="space-between">
                    <Title content={HeaderCnt.titleCnt} />
                    <ButtonAskQuestion
                        children="Ask question"
                        path={Path.Ask}
                        type="primary"
                        size="middle"
                    />
                </Row>

                <Row align="middle" justify="space-between">
                    {HeaderCnt.children}
                    <Filter arrayData={dummyData} />
                </Row>
            </Space>
        </Layout>
    )
}

export default HeaderContent
