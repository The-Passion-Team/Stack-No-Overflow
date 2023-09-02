import { Button, Layout, Row, Space } from "antd"
import { Filter, Title } from "~/components/contents"

const ButtonAskQuestion = () => {
    return (
        <Button type="primary" size="large">
            Ask Question
        </Button>
    )
}

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

const HeaderContent = () => {
    return (
        <Layout style={style1}>
            <Space direction="vertical" size="middle">
                <Row align="middle" justify="space-between">
                    <Title content="Top Questions" />
                    <ButtonAskQuestion />
                </Row>

                <Row align="middle" justify="end">
                    <Filter data={dummyData} />
                </Row>
            </Space>
        </Layout>
    )
}

export default HeaderContent
