import React, { useState } from "react"
import { Layout, Menu, MenuProps } from "antd"
import {
    AppstoreOutlined,
    HomeOutlined,
    MoneyCollectOutlined,
    TeamOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { pathCompanies, pathHome, pathQuestions, pathTags, pathUsers } from "~/routes"

const { Sider: SiderAntDesign } = Layout

const siderStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#fff",
    padding: "20px 0",
}

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const items: MenuProps["items"] = [
    getItem("Home", pathHome, <HomeOutlined />),

    getItem("Public", "public", <AppstoreOutlined />, [
        getItem("Questions", pathQuestions),
        getItem("Tags", pathTags),
        getItem("Users", pathUsers),
        getItem("Companies", pathCompanies),
    ]),

    { type: "divider" },

    getItem(
        "COLLECTIVES",
        "COLLECTIVES",
        null,
        [getItem("Explore Collectives", "Explore Collectives", <MoneyCollectOutlined />)],
        "group",
    ),

    getItem(
        "TEAMS",
        "TEAMS",
        <TeamOutlined />,
        [getItem("Create free Team", "Create free Team", <TeamOutlined />)],
        "group",
    ),
]

const Sider = () => {
    const [openKeys, setOpenKeys] = useState(["public"])

    const rootSubmenuKeys = ["home", "public"]

    const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    const navigate = useNavigate()

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key)
    }

    return (
        <SiderAntDesign style={siderStyle}>
            <Menu
                onClick={onClick}
                style={{ width: "100%" }}
                defaultSelectedKeys={[pathHome]}
                defaultOpenKeys={[pathHome]}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                mode="inline"
                items={items}
            />
        </SiderAntDesign>
    )
}

export default Sider