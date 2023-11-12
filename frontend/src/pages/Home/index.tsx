import SideBar from "./components/Sidebar"
import MainBar from "./components/Mainbar"
import LayoutPage from "~/components/LayoutPage"
import "./styles/home.scss"

export function Home() {
    return <LayoutPage mainContent={<MainBar />} sideContent={<SideBar />} />
}
