import React from "react"
import { PF } from "~/utils/variables"

type LogoProps = {
    size?: number
}

export function Logo(props: LogoProps) {
    return (
        <img
            src={PF + "/assets/Untitled_design-removebg-preview.png"}
            alt="Logo"
            style={{ height: props.size || 35 }}
        />
    )
}

