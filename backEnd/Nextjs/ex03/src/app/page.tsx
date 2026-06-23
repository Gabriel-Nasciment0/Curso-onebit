import Link from "next/link"
import styles from "./page.module.scss"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.MainContainer}>
                <h1>Conheça as Naves Do Universo Star Wars</h1>

                <Link href="/naves">Ver Todas</Link>
            </main>
        </div>
    )
}
