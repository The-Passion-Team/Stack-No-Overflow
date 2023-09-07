import { Row } from "antd"
import { Title } from "~/components"
import { PF } from "~/utils/variables"

const Header = () => {
    return (
        <Row
            align="middle"
            style={{
                backgroundImage: `url("${PF}/assets/Screenshot_2023-09-06_163645-removebg-preview.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "auto 100%",
                height: 130,
                marginBottom: 10,
            }}
        >
            <Title content="Ask a public question" />
        </Row>
    )
}

export default Header
