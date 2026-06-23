import naves from "@/data/spaceships.json"
import styles from "./page.module.scss"
export default function Naves() {
    return (
        <div className={styles.naves}>
            <h1>Todas as Espaçonaves</h1>
            <section>
                {naves.map((nave) => (
                    <article key={nave.id}>
                        <h2>{nave.name}</h2>
                    </article>
                ))}
            </section>
        </div>
    )
}
