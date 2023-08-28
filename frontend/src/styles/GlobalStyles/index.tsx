import React from "react"
import "./GlobalStyles.css"

type props = {
    children: any
}

const GlobalStyles = (props: props) => {
    return <div>{props.children}</div>
}

export default GlobalStyles
