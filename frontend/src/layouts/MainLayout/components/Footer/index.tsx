import React from "react"
import { Layout } from "antd"

const { Footer: FooterAntDesign } = Layout

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
}

const Footer = () => {
    return <FooterAntDesign style={footerStyle}>Footer</FooterAntDesign>
}

export default Footer
