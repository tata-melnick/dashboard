import React from "react"
import styles from "./main.module.css"
import UnitEconomics from "../../components/UnitEconomics"
import Widgets from "../../components/Widgets"

const MainPage: React.FC = () => {
    return (
        <div className={styles.main}>
            <UnitEconomics />
            <Widgets />
        </div>
    )
}

export default MainPage
