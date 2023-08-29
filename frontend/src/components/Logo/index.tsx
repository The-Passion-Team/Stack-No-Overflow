import React from "react"
import { PF } from "~/utils/variables"

type props = {
    size?: number
}

const Logo: React.FC<props> = ({ size }) => {
    return (
        <img
            src={PF + "/assets/Untitled_design-removebg-preview.png"}
            alt="Logo"
            style={{ height: size || 35 }}
        />
    )
}

export default Logo
