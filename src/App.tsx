import "./App.css"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" />
            </Route>
        </Routes>
    )
}

export default App
