import React from "react"
import styles from "./main.module.css"
import UnitEconomics from "../../components/UnitEconomics"
import Widgets from "../../components/Widgets"

interface IMainPageProps {
    theme: "light" | "dark"
}

const MainPage: React.FC<IMainPageProps> = ({ theme }) => {
    return (
        <div className={styles.main}>
            <UnitEconomics theme={theme} />
            <Widgets theme={theme} />
        </div>
    )
}

export default MainPage
