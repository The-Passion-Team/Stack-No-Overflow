import React from "react"
import { Button, Layout, Row } from "antd"
import TitlePage from "~/components/TitlePage"

const ButtonAskQuestion = () => {
    return <Button>Ask Question</Button>
}

const HeaderContent = () => {
    return (
        <Layout style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Row>
                <Row justify="space-between" align="middle" style={{ display: "flex", flex: 1 }}>
                    <TitlePage content="Top Questions" />
                    <ButtonAskQuestion />
                </Row>

                <Row></Row>
            </Row>
        </Layout>
    )
}

export default HeaderContent
