import React from "react"
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

interface SideBarProps {
    changeTheme(): void
    theme: "light" | "dark"
}

const Sidebar: React.FC<SideBarProps> = ({ changeTheme, theme }) => {

    return (
        <div className={styles.sideBar}>
            <button className={styles.arrow}>
                <ArrowIcon />
            </button>
            <Menu />
            <div className={styles.wrap}>
                <Link to="/authorization" className={styles.tab}>
                    <SingInIcon /> Выйти
                </Link>
                <div className={styles.label}>
                    {theme === "light" ? (
                        <>
                            <DarkThemeIcon />
                            Dark mode
                        </>
                    ) : (
                        <>
                            <LightThemeIcon />
                            Light mode
                        </>
                    )}
                    <label className={cn(styles.checkbox, theme === "light" && styles.checkboxOn)} htmlFor="checkbox">
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
