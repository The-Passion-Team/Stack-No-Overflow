import { Typography } from "antd"

const styles = {
    fontSize: 28,
}

interface props {
    content: string
}

export const Title = (props: props) => {
    return <Typography.Text style={styles}>{props.content}</Typography.Text>
}
