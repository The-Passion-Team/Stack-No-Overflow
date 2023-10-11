import { Col, Row, Space } from "antd"
import Navigation from "./components/Navigation"
import Relative from "./components/Relative"
import Stats from "./components/Stats"
import { Communities } from "./components"

export function Profile() {
    return (
        <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
            <Relative
                avatar=""
                username="Hà Văn Được"
                joinedAt="Member for 1 year, 2 months"
                lastSeen="Last seen this week"
                visited="Visited 156 days, 8 consecutive"
            />

            <Navigation />

            <Row gutter={[16, 16]}>
                <Col lg={7} xs={24}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Stats reputation={2310} reached={2345} answers={588} questions={324} />
                        {/* <Collectives
                            reputation={2310}
                            reached={2345}
                            answers={588}
                            questions={324}
                        /> */}
                    </Space>
                    <Communities />
                </Col>
                <Col lg={16} xs={24}>
                    2
                </Col>
            </Row>
        </div>
    )
}
