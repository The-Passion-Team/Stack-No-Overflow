import { Space, Typography } from "antd"
import Link from "antd/es/typography/Link"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectorFormAsk } from "~/redux/formAsk"
import { PF } from "~/utils/variables"

export const SuggestWritingTry = () => {
    const form = useSelector(selectorFormAsk)

    return (
        <>
            {form.try.current ? (
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
                        Expand on the problem
                    </Space>

                    <Space style={{ backgroundColor: "#fff", padding: 20 }}>
                        <img src={`${PF}/assets/icons8-sign-up-50.png`} alt="" width={45} />
                        <Space direction="vertical">
                            <Typography.Text style={{ fontSize: 12 }}>
                                Show what you’ve tried, tell us what happened, and why it didn’t
                                meet your needs.
                            </Typography.Text>
                            <Typography.Text style={{ fontSize: 12 }}>
                                Not all questions benefit from including code, but if your problem
                                is better understood with code you’ve written, you should include a
                                <Link>minimal, reproducible example</Link>.
                            </Typography.Text>
                            <Typography.Text style={{ fontSize: 12 }}>
                                Please make sure to post code and errors as text directly to the
                                question (and <Link>not as images</Link>), and{" "}
                                <Link>format them appropriately</Link>.
                            </Typography.Text>
                        </Space>
                    </Space>
                </Space>
            )}
        </>
    )
}
