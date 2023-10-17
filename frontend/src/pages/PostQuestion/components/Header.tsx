import { Title } from "~/components"
import { PF } from "~/utils/variables"

interface props {
    title: string
}

export const Header = ({ title }: props) => {
    return (
        <div
            style={{
                backgroundImage: `url("${PF}/assets/Screenshot_2023-09-06_163645-removebg-preview.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "auto 100%",
                height: 130,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Title content={title} />
        </div>
    )
}
