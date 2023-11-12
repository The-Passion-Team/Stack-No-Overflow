import { useEffect } from "react"
import LayoutPage from "~/components/LayoutPage"
import SideBar from "../Home/components/Sidebar"
import { HeadBar } from "./components/HeadBar"
import Content from "./components/Content"
import { useParams } from "react-router-dom"
import { requestGetPost } from "~/redux/posts/actions"
import { useAppDispatch } from "~/redux/store"

export function Questions() {
    const postId = useParams().postId
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(requestGetPost({ _id: postId }))
    }, [postId, dispatch])

    return (
        <LayoutPage
            headerContent={<HeadBar />}
            mainContent={<Content />}
            sideContent={<SideBar />}
        />
    )
}
