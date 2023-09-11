import { Space, Typography } from "antd"
import Link from "antd/es/typography/Link"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectorFormAsk } from "~/redux/formAsk"
import { PF } from "~/utils/variables"

const SuggestWritingTags = () => {
    const form = useSelector(selectorFormAsk)

    return (
        <>
            {form.tags.current ? (
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
                        Adding tags
                    </Space>

                    <Space style={{ backgroundColor: "#fff", padding: 20 }}>
                        <img src={`${PF}/assets/icons8-sign-up-50.png`} alt="" width={45} />
                        <Space direction="vertical">
                            <Typography.Text style={{ fontSize: 12 }}>
                                Tags help ensure that your question will get attention from the
                                right people.
                            </Typography.Text>
                            <Typography.Text style={{ fontSize: 12 }}>
                                <Link>Learn more about tagging</Link>
                            </Typography.Text>
                        </Space>
                    </Space>
                </Space>
            )}
        </>
    )
}

export default SuggestWritingTags
