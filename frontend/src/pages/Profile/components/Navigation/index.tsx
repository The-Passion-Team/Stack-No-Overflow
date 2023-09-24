import { Button, Space } from "antd"
import addOrUpdateURLParams from "~/utils/addURLParams"

const Btns = [{ name: "Profile" }, { name: "Activity" }, { name: "Saves" }, { name: "Settings" }]

const Navigation = () => {
    const handleClick = (name: string) => {
        addOrUpdateURLParams("tab", name)
        window.location.reload()
    }

    const tab = new URLSearchParams(window.location.search).get("tab") || Btns[0].name

    return (
        <Space size={2} style={{ marginBottom: 20 }}>
            {Btns.map((item, index) => (
                <Button
                    shape="round"
                    type={tab === item.name ? "primary" : "text"}
                    key={index}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}
                </Button>
            ))}
        </Space>
    )
}

export default Navigation
