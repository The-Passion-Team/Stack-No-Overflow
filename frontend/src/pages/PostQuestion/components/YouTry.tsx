import { Button, Form, Typography } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setStatusTry, setTry } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"

export const YouTry = () => {
    const form = useSelector(selectorFormAsk)
    const dispatch = useDispatch()

    const handleChange = () => {
        const input = document.getElementById("textarea-try") as HTMLInputElement | null
        const value = input?.value
        dispatch(setTry(value))
    }

    const handleClick = () => {
        const input = document.getElementById("textarea-try") as HTMLInputElement | null
        const value = input?.value
        if (value === "") return
        dispatch(setStatusTry())

        console.log("form.try.data", form.try.data)
    }

    return (
        <Form disabled={form.try.current && form.try.status !== "succeeded"}>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>
                    What did you try and what were you expecting?
                </Typography>
                <Typography>
                    Describe what you tried, what you expected to happen, and what actually
                    resulted. Minimum 20 characters.
                </Typography>
                <TextArea rows={10} id="textarea-try" onChange={handleChange} />
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
