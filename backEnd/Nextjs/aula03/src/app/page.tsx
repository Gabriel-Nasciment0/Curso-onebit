import styles from "./page.module.scss"
export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <h1>Olá, Next.js!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </main>
        </div>
    )
}
