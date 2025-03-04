import React from "react"
import styles from "./menu.module.css"
import {
    HomeIcon,
    StatsIcon,
    BellIcon,
    ChartPieAltIcon,
    LikeIcon,
    CreditCardIcon,
} from "../../icons"
import { Link, useLocation } from "react-router-dom"
import cn from "classnames-ts"

const Menu: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link
                        to="/"
                        className={cn(
                            styles.tab,
                            pathname === "/" && styles.active
                        )}
                    >
                        <HomeIcon />
                        <span className={styles.tabText}>Главная</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/stats"
                        className={cn(
                            styles.tab,
                            pathname === "/stats" && styles.active
                        )}
                    >
                        <StatsIcon />
                        <span className={styles.tabText}>Доходы</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/bell"
                        className={cn(
                            styles.tab,
                            pathname === "/bell" && styles.active
                        )}
                    >
                        <BellIcon />
                        <span className={styles.tabText}>Уведомления</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/chart-pie-alt"
                        className={cn(
                            styles.tab,
                            pathname === "/chart-pie-alt" && styles.active
                        )}
                    >
                        <ChartPieAltIcon />
                        <span className={styles.tabText}>Аналитика</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/like"
                        className={cn(
                            styles.tab,
                            pathname === "/like" && styles.active
                        )}
                    >
                        <LikeIcon />
                        <span className={styles.tabText}>Избранное</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/credit-card"
                        className={cn(
                            styles.tab,
                            pathname === "/credit-card" && styles.active
                        )}
                    >
                        <CreditCardIcon />
                        <span className={styles.tabText}>Кошелёк</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
