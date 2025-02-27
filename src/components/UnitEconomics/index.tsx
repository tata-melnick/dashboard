import React from "react"
import styles from "./unitEconomics.module.css"
import { SettingsIcon } from "../../icons"

interface IUnitEconomicsProps {
    theme: "light" | "dark"
}

const UnitEconomics: React.FC<IUnitEconomicsProps> = ({ theme }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h2>Юнит-экономика</h2>
                <div className={styles.btnStyles}>
                    <button className={styles.btn}>
                        <img src="/public/chip.png" alt="chip" />
                        Все маркетплейсы
                        <img src="/public/source.png" alt="chip" />
                    </button>
                    <button className={styles.btn}>
                        за неделю
                        <img src="/public/source.png" alt="chip" />
                    </button>
                    <SettingsIcon />
                </div>
            </div>
            {theme === "light" ? (
                <div className={styles.widgetsUnit}>
                    <img
                        src="/content/lightTheme/widgetUnit_1.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widgetUnit_2.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widgetUnit_3.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/lightTheme/widgetUnit_4.png"
                        alt="Notification"
                    />
                </div>
            ) : (
                <div className={styles.widgetsUnit}>
                    <img
                        src="/content/darkTheme/widgetUnit_1.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widgetUnit_2.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widgetUnit_3.png"
                        alt="Notification"
                    />

                    <img
                        src="/content/darkTheme/widgetUnit_4.png"
                        alt="Notification"
                    />
                </div>
            )}
        </div>
    )
}

export default UnitEconomics
