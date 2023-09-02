import React from "react"
import App from "~/App"
import theme from "./theme"
import { ConfigProvider } from "antd"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/GlobalStyles"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <ConfigProvider theme={theme}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ConfigProvider>
    </React.StrictMode>,
)
