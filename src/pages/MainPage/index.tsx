import React from "react"
import { useOutletContext } from "react-router-dom"
import styles from "./main.module.css"
import UnitEconomics from "../../components/UnitEconomics"
import Widgets from "../../components/Widgets"

const MainPage: React.FC = () => {
    const { theme } = useOutletContext<{ theme: "light" | "dark" }>()
    return (
        <div className={styles.main}>
            <UnitEconomics theme={theme} />
            <Widgets theme={theme} />
        </div>
    )
}

export default MainPage
