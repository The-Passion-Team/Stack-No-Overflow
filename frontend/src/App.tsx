import React from "react"
import GlobalStyles from "~/styles/GlobalStyles"

const Btn = () => {
    return <div>button</div>
}

function App() {
    return (
        <GlobalStyles>
            <div className="App">
                app <Btn />
            </div>
        </GlobalStyles>
    )
}

export default App
