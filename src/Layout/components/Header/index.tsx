import React from "react"
import styles from "./header.module.css"

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <div>
                    <div className={styles.name}>John Smith</div>
                    <div className={styles.job}>HR-manager</div>
                </div>
                <div className={styles.img}>
                    <img src="/public/avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header
