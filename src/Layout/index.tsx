import React, { useState } from "react"
import cn from "classnames-ts"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import styles from "./layout.module.css"
import MainPage from "../pages/MainPage"

const Layout: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark")
    const switchTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <div className={cn(styles.layout, theme)}>
            <Sidebar changeTheme={switchTheme} theme={theme} />
            <div className={styles.wrap}>
                <Header />
                <MainPage theme={theme} />
            </div>
        </div>
    )
}

export default Layout
