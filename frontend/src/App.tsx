import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectorAuth } from "./redux/auth/containers"
import { checkLogged } from "./redux/auth"
import { useAppDispatch } from "./redux/store"

function App() {
    const accessToken = useSelector(selectorAuth)?.currentUser?.accessToken
    // console.log('accessToken 2', accessToken)
    const dispatch = useAppDispatch()

    useEffect(() => {
        accessToken && dispatch(checkLogged(accessToken))
    }, [accessToken, dispatch])

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const path = route.path
                    const Layout = route.layout || MainLayout
                    const Page = route.page

                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <div className="__stack_no_overflow">
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </div>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
