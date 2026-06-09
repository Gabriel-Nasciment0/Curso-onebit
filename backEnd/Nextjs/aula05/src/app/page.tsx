import styles from "./page.module.scss"
import Image from "next/image"
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
                    <li>
                        <div>Via lactea</div>
                        <Image
                            src="/viaLactea.jpg"
                            alt="Via lactea"
                            width={200}
                            height={200}
                        />
                    </li>
                    <li>
                        <div>Andromeda</div>
                        <Image
                            src="https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg"
                            alt="Andromeda"
                            width={400}
                            height={225}
                            style={{ objectFit: "cover" }}
                            loading="eager"
                        />
                    </li>
                    <li>Item 3</li>
                </ul>
            </main>
        </div>
    )
}
