import { Space } from "antd"
import First from "./components/First"
import Second from "./components/Second"
import Third from "./components/Third"
import Four from "./components/Four"

const SideBar = () => {
    return (
        <Space direction="vertical" style={{ width: 280 }}>
            <First />
            <Second />
            <Third />
            <Four />
        </Space>
    )
}

export default SideBar
