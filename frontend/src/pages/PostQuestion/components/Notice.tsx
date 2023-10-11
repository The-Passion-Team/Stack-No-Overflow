import { Space, Typography } from "antd"
import Link from "antd/es/typography/Link"

export const Notice = () => {
    return (
        <Space
            direction="vertical"
            style={{
                backgroundColor: "#EBF4FB",
                border: "1px solid dodgerblue",
                borderRadius: 5,
                padding: 20,
                fontStyle: "bold",
            }}
        >
            <Typography style={{ fontSize: 18 }}>Writing a good question</Typography>

            <Typography>
                You’re ready to <Link>ask</Link> a <Link>programming-related question</Link> and
                this form will help guide you through the process. Looking to ask a non-programming
                question? See <Link>the topics here</Link> to find a relevant site.
            </Typography>

            <Typography.Paragraph style={{ fontSize: 13 }}>
                <Typography.Title level={5} style={{ fontSize: 13 }}>
                    Steps
                </Typography.Title>
                <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>
                        Add “tags” which help surface your question to members of the community.
                    </li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </Typography.Paragraph>
        </Space>
    )
}
