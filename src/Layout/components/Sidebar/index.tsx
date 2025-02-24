import React from "react"
import styles from "./sidebar.module.css"
import { ArrowIcon, SingInIcon } from "../../../icons"
import Menu from "../../../components/Menu"
import { Link } from "react-router-dom"

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sideBar}>
            <button className={styles.arrow}>
                <ArrowIcon />
            </button>
            <Menu />
            <div className={styles.wrap}>
                <Link to="/authorization" className={styles.btn}>
                    <SingInIcon />
                </Link>
                <div className={styles.label}>
                    <label className={styles.checkbox} htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" className={styles.input}/>
                        <span className={styles.checkboxSwitch}>Light mode</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
