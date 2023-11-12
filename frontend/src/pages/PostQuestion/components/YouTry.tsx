import { Button, Form, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setStatusTry, setTry } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"
import Editor from "~/components/Editor"

export const YouTry = () => {
    const dispatch = useDispatch()
    const form = useSelector(selectorFormAsk)
    const tryValue = useSelector(selectorFormAsk)?.try?.data || ""

    const handleEditorChange = (newData: any) => {
        dispatch(setTry(newData))
    }

    const handleClick = () => {
        if (tryValue === "") return
        dispatch(setStatusTry())
    }

    return (
        <Form>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>
                    What did you try and what were you expecting?
                </Typography>
                <Typography>
                    Describe what you tried, what you expected to happen, and what actually
                    resulted. Minimum 20 characters.
                </Typography>
                <Editor
                    value={tryValue}
                    onChange={handleEditorChange}
                    readOnly={form.try.current && form.try.status !== "succeeded"}
                    target="try"
                />

                {form.try.current ? (
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
