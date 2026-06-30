import { PlanetsManager } from "./components/PlanetsManager"
import styles from "./page.module.css"

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Planetas</h1>
            <PlanetsManager />
        </div>
    )
}
