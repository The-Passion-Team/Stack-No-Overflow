import { Divider, FloatButton, Row, Space } from "antd"
import Ask from "./components/Ask"
import Tags from "./components/Tags"
import Users from "./components/Users"
import Rate from "./components/Rate"
import "./styles.scss"

const QuesterContent = () => {
    return (
        <>
            {dummy.map((item, index) => {
                const content = item.ask
                const tags = item.tags

                return (
                    <Row key={index} className="snoQuester">
                        <Divider style={{ backgroundColor: "#ddd" }} />

                        <Space className="space1">
                            <Rate vote={1} answers={2} views={5} />

                            <Space>
                                <Space direction="vertical" size="middle">
                                    <Ask content={content} size={16} />
                                    <Space
                                        align="center"
                                        wrap
                                        size={["small", "middle"]}
                                        style={{ justifyContent: "space-between", width: "100%" }}
                                    >
                                        <Tags listTags={tags} />
                                        <Users username="Ha Van Duoc" timepost="asked 1 min ago" />
                                    </Space>
                                </Space>
                            </Space>
                        </Space>
                    </Row>
                )
            })}

            <FloatButton.BackTop type="primary" />
        </>
    )
}

export default QuesterContent

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
