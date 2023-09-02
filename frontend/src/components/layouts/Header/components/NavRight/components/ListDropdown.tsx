import React from "react"
import { Row, Col, Space, Badge, Button, Dropdown, MenuProps } from "antd"
import {
    InboxOutlined,
    TrophyOutlined,
    QuestionCircleOutlined,
    UngroupOutlined,
} from "@ant-design/icons"

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
]

const itemList = [
    { key: 1, badgeCount: 1, icon: <InboxOutlined /> },
    { key: 2, badgeCount: 0, icon: <TrophyOutlined /> },
    { key: 3, badgeCount: 0, icon: <QuestionCircleOutlined /> },
    { key: 41, badgeCount: 0, icon: <UngroupOutlined /> },
]

const ListDropdown: React.FC = () => {
    return (
        <Row gutter={18}>
            {itemList.map((item) => {
                return (
                    <Col key={item.key}>
                        <Dropdown menu={{ items }} placement="bottomRight">
                            <Space size={24}>
                                <Badge count={item.badgeCount}>
                                    <Button icon={item.icon} />
                                </Badge>
                            </Space>
                        </Dropdown>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ListDropdown
