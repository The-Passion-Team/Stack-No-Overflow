import React from "react"
import App from "~/App"
import theme from "./theme"
import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/GlobalStyles"
import { persistor, store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConfigProvider theme={theme}>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
