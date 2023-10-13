import { Button, Form, Select, SelectProps, Typography } from "antd"
import { useSelector } from "react-redux"
import { selectorFormAsk, setStatusTags, setTags } from "~/redux/formAsk"
import { Fragment } from "react"
import { Wrapper } from "./Wrapper"
import { requestFindTag } from "~/redux/tags/actions"
import { useState } from "react"
import { useAppDispatch } from "~/redux/store"

export const Tags = () => {
    const form = useSelector(selectorFormAsk)
    const dispatch = useAppDispatch()

    const [options, setOptions] = useState<SelectProps["options"]>([])

    const handleChange = (value: string) => {
        dispatch(setTags(value))
    }

    const handleSearch = async (value: string) => {
        interface IRequest {
            _id: string
            name: string
        }

        const request: IRequest[] = (await dispatch(requestFindTag(value))).payload

        let data: SelectProps["options"] = []

        request.map((item) => {
            return data?.push({
                value: item.name,
                label: item.name,
            })
        })

        setOptions(data)
    }

    const handleComplete = () => {
        const input = document.getElementById("input-tags") as HTMLInputElement | null
        const value = input?.value
        if (value === "") return
        dispatch(setStatusTags())
    }

    return (
        <Form disabled={form.tags.current && form.tags.status !== "succeeded"}>
            <Wrapper>
                <Typography style={{ fontWeight: 500 }}>Tags</Typography>
                <Typography>
                    Add up to 5 tags to describe what your question is about. Start typing to see
                    suggestions.
                </Typography>
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="e.g. (asp.net flutter django)"
                    onChange={handleChange}
                    onSearch={handleSearch}
                    options={options}
                />
                {form.tags.current ? (
                    <Fragment />
                ) : (
                    <Button type="primary" onClick={handleComplete}>
                        Complete
                    </Button>
                )}
            </Wrapper>
        </Form>
    )
}
