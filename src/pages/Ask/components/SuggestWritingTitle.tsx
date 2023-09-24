import { Space, Typography } from "antd"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectorFormAsk } from "~/redux/formAsk"
import { PF } from "~/utils/variables"

const SuggestWritingTitle = () => {
    const form = useSelector(selectorFormAsk)

    return (
        <>
            {form.title.current ? (
                <Fragment />
            ) : (
                <Space
                    direction="vertical"
                    size={0}
                    style={{
                        borderRadius: 5,
                        overflow: "hidden",
                        boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)",
                    }}
                >
                    <Space
                        style={{
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
                                You might find that you have a better idea of your title after
                                writing out the rest of the question.
                            </Typography.Text>
                        </Space>
                    </Space>
                </Space>
            )}
        </>
    )
}

export default SuggestWritingTitle
