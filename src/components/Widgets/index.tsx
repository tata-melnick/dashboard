import React from "react"
import styles from "./widgets.module.css"
import { SettingsIcon } from "../../icons"

interface IWidgetsProps {
    theme: "light" | "dark"
}

const Widgets: React.FC<IWidgetsProps> = ({ theme }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h2>Виджеты</h2>
                <SettingsIcon />
            </div>
            <div className={styles.widgets}>
                <img
                    src={`/content/${theme}/widget_1.png`}
                    alt="Notification"
                />

                <img
                    src={`/content/${theme}/widget_2.png`}
                    alt="Notification"
                />

                <img
                    src={`/content/${theme}/widget_3.png`}
                    alt="Notification"
                />

                <img
                    src={`/content/${theme}/widget_4.png`}
                    alt="Notification"
                />

                <img
                    src={`/content/${theme}/widget_5.png`}
                    alt="Notification"
                />

                <img
                    src={`/content/${theme}/widget_6.png`}
                    alt="Notification"
                />
            </div>
        </div>
    )
}

export default Widgets
