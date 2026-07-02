import { PlanetForm } from "@/components/PlanetForm"
import { Planet, PlanetItem } from "@/components/PlanetItem"
import styles from "./page.module.css"

export default async function Home() {
    const response = await fetch("http://localhost:3000/api/planets")
    const data: Planet[] = await response.json()

    return (
        <div className={styles.page}>
            <h1>Planetas</h1>
            <div className={styles.container}>
                <PlanetForm />

                <section className={styles.planets}>
                    {data.map((planet) => (
                        <PlanetItem
                            key={planet.id}
                            planet={planet}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}
