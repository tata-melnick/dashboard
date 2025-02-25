import React from "react"
import styles from "./menu.module.css"
import {
    SearchIcon,
    HomeIcon,
    StatsIcon,
    BellIcon,
    ChartPieAltIcon,
    LikeIcon,
    CreditCardIcon,
} from "../../icons"
import { Link } from "react-router-dom"

const Menu: React.FC = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.tab}>
                    <Link to="/search">
                        <SearchIcon />
                        Поиск...
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/">
                        <HomeIcon />
                        Главная
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/stats">
                        <StatsIcon />
                        Доходы
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/bell">
                        <BellIcon />
                        Уведомления
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/chart-pie-alt">
                        <ChartPieAltIcon />
                        Аналитика
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/like">
                        <LikeIcon />
                        Избранное
                    </Link>
                </li>
                <li className={styles.tab}>
                    <Link to="/credit-card">
                        <CreditCardIcon />
                        Кошелёк
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
