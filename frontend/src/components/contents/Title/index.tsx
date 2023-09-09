import { Typography } from "antd"

const styles = {
    fontSize: 28,
}

interface props {
    content: string
}

export const Title = ({ content }: props) => {
    return <Typography.Text style={styles}>{content}</Typography.Text>
}
