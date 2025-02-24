import React from "react"
import styles from "./menu.module.css"
import {
    SearchIcon,
    HomeIcon,
    StatsIcon,
    BellIcon,
    ChartPieAltIcon,
    LikeIcon,
    CreditCardIcon
} from "../../icons"
import { Link } from "react-router-dom"

const Menu: React.FC = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.btn}>
                    <Link to="/search">
                        <SearchIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/stats">
                        <StatsIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/bell">
                        <BellIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/chart-pie-alt">
                        <ChartPieAltIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/like">
                        <LikeIcon />
                    </Link>
                </li>
                <li className={styles.btn}>
                    <Link to="/credit-card">
                        <CreditCardIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
