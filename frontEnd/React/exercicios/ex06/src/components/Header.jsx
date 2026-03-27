import { Link } from "react-router-dom"
import styles from "./Header.module.css"
export default function Header() {
    return (
        <nav className={styles.container}>
            <h1>REACT STOCK</h1>
            <div className={styles.links}>
                <Link
                    to={"/"}
                    className={styles.link}
                >
                    Dashboard
                </Link>
                <Link
                    to={"/items"}
                    className={styles.link}
                >
                    Itens
                </Link>
                <Link
                    to={"/items/new"}
                    className={styles.link}
                >
                    Novo Item
                </Link>
            </div>
        </nav>
    )
}
