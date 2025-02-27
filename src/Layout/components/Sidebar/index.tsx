import React, { useState } from "react"
import cn from "classnames-ts"
import styles from "./sidebar.module.css"
import {
    ArrowIcon,
    SingInIcon,
    LightThemeIcon,
    DarkThemeIcon,
} from "../../../icons"
import Menu from "../../../components/Menu"
import { Link } from "react-router-dom"

interface ISideBarProps {
    changeTheme(): void
    theme: "light" | "dark"
}

const Sidebar: React.FC<ISideBarProps> = ({ changeTheme, theme }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={cn(
                styles.sidebar,
                collapsed && [styles.sidebarCollapsed]
            )}
        >
            <button className={styles.arrow} onClick={toggleCollapsed}>
                <ArrowIcon />
            </button>
            <Menu collapsed={collapsed} />
            <div className={styles.wrap}>
                <Link to="/authorization" className={styles.tab}>
                    <SingInIcon />
                    <span className={styles.tabText}>Выйти</span>
                </Link>
                <div className={styles.label}>
                    {theme === "light" ? (
                        <>
                            <DarkThemeIcon />
                            <span className={styles.labelText}>Dark mode</span>
                        </>
                    ) : (
                        <>
                            <LightThemeIcon />
                            <span className={styles.labelText}>Light mode</span>
                        </>
                    )}
                    <label
                        className={cn(
                            styles.checkbox,
                            theme === "light" && styles.checkboxOn
                        )}
                        htmlFor="checkbox"
                    >
                        <input
                            hidden
                            type="checkbox"
                            id="checkbox"
                            onChange={changeTheme}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
