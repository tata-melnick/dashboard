import React from "react"
import "./App.css"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage theme={"light"} />} />
            </Route>
        </Routes>
    )
}

export default App
