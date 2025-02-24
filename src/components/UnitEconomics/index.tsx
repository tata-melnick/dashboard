import React from "react"
import styles from "./unitEconomics.module.css"
import { SettingsIcon } from "../../icons"

const UnitEconomics: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h2>Юнит-экономика</h2>
                <div className={styles.btnStyles}>
                    <button className={styles.btn}>Все маркетплейсы</button>
                    <button className={styles.btn}>за неделю</button>
                    <SettingsIcon />
                </div>
            </div>
            <div className={styles.widgetsUnit}>
                <img
                    src="/public/content/widgetUnit_1.png"
                    alt="Notification"
                />

                <img
                    src="/public/content/widgetUnit_2.png"
                    alt="Notification"
                />

                <img
                    src="/public/content/widgetUnit_3.png"
                    alt="Notification"
                />

                <img
                    src="/public/content/widgetUnit_4.png"
                    alt="Notification"
                />
            </div>
        </div>
    )
}

export default UnitEconomics
