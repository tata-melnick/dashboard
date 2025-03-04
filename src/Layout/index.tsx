import React, { useState } from "react"
import cn from "classnames-ts"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import styles from "./layout.module.css"
// import MainPage from "../pages/MainPage"
import { Outlet } from "react-router-dom"

const Layout: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light")
    const switchTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <div className={cn(styles.layout, theme)}>
            <Sidebar changeTheme={switchTheme} theme={theme} />
            <div className={styles.wrap}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
