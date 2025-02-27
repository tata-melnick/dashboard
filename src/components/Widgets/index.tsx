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

            {theme === "light" ? (
                <div className={styles.widgets}>
                    <img
                        src="/content/lightTheme/widget_1.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widget_2.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widget_3.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widget_4.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widget_5.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widget_6.png"
                        alt="Notification"
                    />
                </div>
            ) : (
                <div className={styles.widgets}>
                    <img
                        src="/content/darkTheme/widget_1.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widget_2.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widget_3.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widget_4.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widget_5.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widget_6.png"
                        alt="Notification"
                    />
                </div>
            )}
        </div>
    )
}

export default Widgets
