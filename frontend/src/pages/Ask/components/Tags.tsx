import { Button, Form, Input, Typography } from "antd"
import Wrapper from "./Wrapper"
import { useDispatch, useSelector } from "react-redux"
import { selectorFormAsk, setStatusTags, setTags } from "~/redux/formAsk"
import { Fragment } from "react"

const Tags = () => {
    const form = useSelector(selectorFormAsk)
    const dispatch = useDispatch()

    const handleChange = () => {
        const input = document.getElementById("input-tags") as HTMLInputElement | null
        const value = input?.value
        dispatch(setTags(value))
    }

    const handleClick = () => {
        const input = document.getElementById("input-tags") as HTMLInputElement | null
        const value = input?.value
        if (value === "") return
        dispatch(setStatusTags())

        console.log("form.title.data", form.title.data)
    }

    return (
        <Form disabled={form.tags.current && form.tags.status !== "succeeded"}>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>Tags</Typography>
                <Typography>
                    Add up to 5 tags to describe what your question is about. Start typing to see
                    suggestions.
                </Typography>
                <Input
                    id="input-tags"
                    placeholder="e.g. (asp.net flutter django)"
                    onChange={handleChange}
                />
                {form.tags.current ? (
                    <Fragment />
                ) : (
                    <Button type="primary" onClick={handleClick}>
                        Complete
                    </Button>
                )}
            </Wrapper>
        </Form>
    )
}

export default Tags
