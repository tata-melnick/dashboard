import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.wrap}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
