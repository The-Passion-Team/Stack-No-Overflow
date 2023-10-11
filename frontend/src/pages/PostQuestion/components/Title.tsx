import { Button, Form, Input, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setStatusTitle, setTitle } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"

export const Title = () => {
    const form = useSelector(selectorFormAsk)
    const dispatch = useDispatch()

    const handleChange = () => {
        const input = document.getElementById("input-title") as HTMLInputElement | null
        const value = input?.value
        dispatch(setTitle(value))
    }

    const handleClick = () => {
        const input = document.getElementById("input-title") as HTMLInputElement | null
        const value = input?.value
        if (value === "") return
        dispatch(setStatusTitle())

        console.log("form.title.data", form.title.data)
    }

    return (
        <Form disabled={form.title.current && form.title.status !== "succeeded"}>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>Title</Typography>
                <Typography>
                    Be specific and imagine you’re asking a question to another person.
                </Typography>
                <Input
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    id="input-title"
                    onChange={handleChange}
                />
                {form.title.current ? (
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
