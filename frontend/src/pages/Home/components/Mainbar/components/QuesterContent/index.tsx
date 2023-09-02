import { Col, Divider, FloatButton, Row, Space } from "antd"
import Ask from "./components/Ask"
import Tags from "./components/Tags"
import Users from "./components/Users"
import Rate from "./components/Rate"
import { Fragment } from "react"

const dummy = [
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
    {
        ask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quoplaceat ipsam. Quod tempore temporibus assumenda?",
        tags: ["c#", "asp.net", "angular", "reactjs"],
        avatar: null,
        username: "Ha Van Duoc",
        timepost: "asked 1 min ago",
    },
]

const QuesterContent = () => {
    return (
        <Fragment>
            {dummy.map((item, index) => {
                const content = item.ask
                const tags = item.tags

                return (
                    <Row key={index}>
                        <Divider style={{ backgroundColor: "#ddd" }} />

                        <Row gutter={20}>
                            <Col span={4}>
                                <Row justify="end">
                                    <Rate vote={1} answers={2} views={5} />
                                </Row>
                            </Col>

                            <Col span={18}>
                                <Space direction="vertical">
                                    <Ask content={content} />
                                    <Row justify="space-between" align="middle">
                                        <Tags listTags={tags} />
                                        <Users username="Ha Van Duoc" timepost="asked 1 min ago" />
                                    </Row>
                                </Space>
                            </Col>
                        </Row>
                    </Row>
                )
            })}

            <FloatButton.BackTop type="primary" />
        </Fragment>
    )
}

export default QuesterContent
