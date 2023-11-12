import { Button, Form, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setDetail, setStatusDetail } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"
import Editor from "~/components/Editor"

export const DetailProblem = () => {
    const dispatch = useDispatch()
    const form = useSelector(selectorFormAsk)
    const detailValue = useSelector(selectorFormAsk)?.detail?.data || ""

    console.log("detailValue", detailValue)

    const handleEditorChange = (newData: any) => {
        dispatch(setDetail(newData))
    }

    const handleClick = () => {
        if (detailValue === "") return
        dispatch(setStatusDetail())
    }

    return (
        <Form>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>
                    What are the details of your problem?
                </Typography>
                <Typography>
                    Introduce the problem and expand on what you put in the title. Minimum 20
                    characters.
                </Typography>
                <Editor
                    value={detailValue}
                    onChange={handleEditorChange}
                    readOnly={form.detail.current && form.detail.status !== "succeeded"}
                    target="detail"
                />
                {form.detail.current ? (
                    <Fragment />
                ) : (
                    <Button type="primary" onClick={handleClick}>
                        Next
                    </Button>
                )}
            </Wrapper>
        </Form>
    )
}
