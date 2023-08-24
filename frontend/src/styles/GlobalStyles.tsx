interface props {
    children: JSX.Element
}

const GlobalStyles = (props: props) => {
    return <div style={{ color: "blue", fontSize: 50 }}>{props.children}</div>
}

export default GlobalStyles
