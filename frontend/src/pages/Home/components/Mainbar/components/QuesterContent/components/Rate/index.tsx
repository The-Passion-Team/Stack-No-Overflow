import { Space, Typography } from "antd"

interface props {
    vote?: number
    answers?: number
    views?: number
}

const Rate = ({ vote, answers, views }: props) => {
    const type = [
        { name: "vote", value: vote },
        { name: "answers", value: answers },
        { name: "views", value: views },
    ]

    return (
        <Space className="snoRate">
            {type.map((item, index) => (
                <Typography key={index} style={{ fontSize: 13.5 }}>
                    {item.value || 0} {item.name}
                </Typography>
            ))}
        </Space>
    )
}

export default Rate
