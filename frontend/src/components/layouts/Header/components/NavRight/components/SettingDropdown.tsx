import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { Col, Space, Badge, Button, Dropdown, MenuProps } from "antd"
import { UngroupOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { logoutFromAccount } from "~/redux/auth"
import { selectorAuth } from "~/redux/auth/containers"

const SettingDropdown = () => {
    const currentUser = useSelector(selectorAuth)
    console.log(currentUser)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const userId = currentUser?._id
    const headers = { token: `Bearer ${currentUser?.accessToken}` }
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(logoutFromAccount({ userId, headers, navigate }))
    }

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    help
                </a>
            ),
        },
        {
            key: "2",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    chat
                </a>
            ),
        },
        {
            key: "3",
            label: (
                <Button type="text" onClick={logOut}>
                    Logout
                </Button>
            ),
        },
    ]

    return (
        <Col>
            <Dropdown menu={{ items }} placement="bottomRight">
                <Space size={24}>
                    <Badge>
                        <Button icon={<UngroupOutlined />} />
                    </Badge>
                </Space>
            </Dropdown>
        </Col>
    )
}

export default SettingDropdown
