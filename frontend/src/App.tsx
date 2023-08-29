import React from "react"
import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes"

function App() {
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
