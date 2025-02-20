import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const Layout: React.FC = () => {
    return (
        <>
            <Sidebar />
            <Header />
        </>
    )
}

export default Layout
