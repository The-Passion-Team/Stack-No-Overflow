import { Fragment, ReactNode } from "react"
// import HeaderContent from "./components/HeaderContent"
import QuesterContent from "./components/QuesterContent"

type Main = {
    HeaderMain: ReactNode
} 

const MainBar = (Main: Main) => {
    return (
        <Fragment>
            {Main.HeaderMain}
            <QuesterContent />
        </Fragment>
    )
}

export default MainBar
