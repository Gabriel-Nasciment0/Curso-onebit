import naves from "@/data/spaceships.json"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"

export default function Naves() {
    return (
        <div className={styles.naves}>
            <h1>Todas as Espaçonaves</h1>
            <section>
                {naves.map((nave) => (
                    <article key={nave.id}>
                        <Link href={`/nave/${nave.id}`}>
                            <Image
                                src={nave.imageUrl}
                                alt={nave.name}
                                width={300}
                                height={200}
                            />
                            <h2>{nave.name}</h2>
                            <p>{nave.category}</p>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    )
}
