import { Button, Form, Typography } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setDetail, setStatusDetail } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"

export const DetailProblem = () => {
    const form = useSelector(selectorFormAsk)
    const dispatch = useDispatch()

    const handleChange = () => {
        const input = document.getElementById("textarea-detail") as HTMLInputElement | null
        const value = input?.value
        dispatch(setDetail(value))
    }

    const handleClick = () => {
        const input = document.getElementById("textarea-detail") as HTMLInputElement | null
        const value = input?.value
        if (value === "") return
        dispatch(setStatusDetail())
    }

    return (
        <Form disabled={form.detail.current && form.detail.status !== "succeeded"}>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>
                    What are the details of your problem?
                </Typography>
                <Typography>
                    Introduce the problem and expand on what you put in the title. Minimum 20
                    characters.
                </Typography>
                <TextArea rows={10} id="textarea-detail" onChange={handleChange} />
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
