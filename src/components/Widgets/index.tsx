import React from "react"
import styles from "./widgets.module.css"
import { SettingsIcon } from "../../icons"

const Widgets: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h2>Виджеты</h2>
                <SettingsIcon />
            </div>
            <div className={styles.widgets}>
                <img src="/public/content/widget_1.png" alt="Notification" />

                <img src="/public/content/widget_2.png" alt="Notification" />

                <img src="/public/content/widget_3.png" alt="Notification" />

                <img src="/public/content/widget_4.png" alt="Notification" />

                <img src="/public/content/widget_5.png" alt="Notification" />

                <img src="/public/content/widget_6.png" alt="Notification" />
            </div>
        </div>
    )
}

export default Widgets
