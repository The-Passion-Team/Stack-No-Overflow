import React from "react"
import "./GlobalStyles.scss"

type props = {
    children: any
}

const GlobalStyles = (props: props) => {
    return <div>{props.children}</div>
}

export default GlobalStyles
