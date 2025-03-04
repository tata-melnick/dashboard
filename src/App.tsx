import React from "react"
import "./App.css"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import MockPage from "./pages/MockPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage theme={"light"} />} />
                <Route path="stats" element={<MockPage />} />
                <Route path="bell" element={<MockPage />} />
                <Route path="chart-pie-alt" element={<MockPage />} />
                <Route path="like" element={<MockPage />} />
                <Route path="credit-card" element={<MockPage />} />
            </Route>
        </Routes>
    )
}

export default App
