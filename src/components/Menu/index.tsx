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
import cn from "classnames-ts"

interface IMenuProps {
    collapsed: boolean
}

const Menu: React.FC<IMenuProps> = ({ collapsed }) => {
    return (
        <nav>
            <ul
                className={cn(
                    styles.list,
                    collapsed && [styles.sidebarCollapsed]
                )}
            >
                <li>
                    <Link to="/search" className={styles.tab}>
                        <SearchIcon />
                        <span className={styles.tabText}>Поиск...</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.tab}>
                        <HomeIcon />
                        <span className={styles.tabText}>Главная</span>
                    </Link>
                </li>
                <li>
                    <Link to="/stats" className={styles.tab}>
                        <StatsIcon />
                        <span className={styles.tabText}>Доходы</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bell" className={styles.tab}>
                        <BellIcon />
                        <span className={styles.tabText}>Уведомления</span>
                    </Link>
                </li>
                <li>
                    <Link to="/chart-pie-alt" className={styles.tab}>
                        <ChartPieAltIcon />
                        <span className={styles.tabText}>Аналитика</span>
                    </Link>
                </li>
                <li>
                    <Link to="/like" className={styles.tab}>
                        <LikeIcon />
                        <span className={styles.tabText}>Избранное</span>
                    </Link>
                </li>
                <li>
                    <Link to="/credit-card" className={styles.tab}>
                        <CreditCardIcon />
                        <span className={styles.tabText}>Кошелёк</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
