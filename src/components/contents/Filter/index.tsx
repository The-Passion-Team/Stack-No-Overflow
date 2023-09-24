import { useState } from "react"
import { Radio } from "antd"
import addOrUpdateURLParams from "~/utils/addURLParams"

interface IFilter {
    arrayData: { name: string }[]
}

export const Filter = ({ arrayData }: IFilter) => {
    const [value, setValue] = useState(arrayData[0].name)

    return (
        <Radio.Group
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
                addOrUpdateURLParams("tag", e.target.value)
            }}
        >
            {arrayData.map((item, index) => {
                return (
                    <Radio.Button key={index} value={item.name}>
                        {item.name}
                    </Radio.Button>
                )
            })}
        </Radio.Group>
    )
}
