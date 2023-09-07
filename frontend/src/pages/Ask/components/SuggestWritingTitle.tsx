import { Space, Typography } from "antd"
import { PF } from "~/utils/variables"

const SuggestWritingTitle = () => {
    return (
        <Space
            direction="vertical"
            style={{
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)",
                gap: 0,
            }}
        >
            <Space
                style={{
                    backgroundColor: "inherit",
                    padding: "12px 20px",
                    display: "flex",
                    width: "100%",
                    borderBottom: "1px solid #ccc",
                }}
            >
                Writing a good title
            </Space>

            <Space style={{ backgroundColor: "#fff", padding: 20 }}>
                <img src={`${PF}/assets/icons8-sign-up-50.png`} alt="" width={45} />
                <Space direction="vertical">
                    <Typography.Text style={{ fontSize: 12 }}>
                        Your title should summarize the problem.
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: 12 }}>
                        You might find that you have a better idea of your title after writing out
                        the rest of the question.
                    </Typography.Text>
                </Space>
            </Space>
        </Space>
    )
}

export default SuggestWritingTitle
