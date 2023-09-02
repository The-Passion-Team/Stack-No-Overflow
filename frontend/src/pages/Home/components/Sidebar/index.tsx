import { Space } from "antd"
import First from "./components/First"
import Second from "./components/Second"

const SideBar = () => {
    return (
        <Space direction="vertical" style={{ width: 280 }}>
            <First />
            <Second />
        </Space>
    )
}

export default SideBar
