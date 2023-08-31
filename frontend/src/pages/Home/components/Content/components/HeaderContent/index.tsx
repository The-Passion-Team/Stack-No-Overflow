import React from "react"
import { Button, Layout, Row, Space } from "antd"
import TitlePage from "~/components/TitlePage"

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

const HeaderContent = () => {
    return (
        <Layout style={style1}>
            <Space direction="vertical" size="middle">
                <Row align="middle" justify="space-between">
                    <TitlePage content="Top Questions" />
                    <ButtonAskQuestion />
                </Row>

                <Row align="middle" justify="end">
                    slkfjskldj
                </Row>
            </Space>
        </Layout>
    )
}

export default HeaderContent
