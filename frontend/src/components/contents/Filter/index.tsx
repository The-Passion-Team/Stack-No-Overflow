import { useState } from "react"
import { Radio } from "antd"
import addOrUpdateURLParams from "~/utils/addURLParams"

interface propsFilter {
    data: item[]
}

interface item {
    name: string
}

export const Filter = (props: propsFilter) => {
    const [value, setValue] = useState(props.data[0].name)

    return (
        <Radio.Group
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
                addOrUpdateURLParams("tag", e.target.value)
            }}
        >
            {props.data.map((item, index) => {
                return (
                    <Radio.Button key={index} value={item.name}>
                        {item.name}
                    </Radio.Button>
                )
            })}
        </Radio.Group>
    )
}
