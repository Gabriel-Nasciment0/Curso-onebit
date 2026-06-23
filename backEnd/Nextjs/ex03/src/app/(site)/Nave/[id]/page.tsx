import data from "@/data/spaceships.json"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"

type Props = {
    params: Promise<{ id: string }>
}

export default async function Nave({ params }: Props) {
    const { id } = await params

    const currentIndex = data.findIndex((n) => String(n.id) === id)

    const item = data[currentIndex]

    if (!item) {
        return <p>Item não encontrado</p>
    }

    const prevItem = data[currentIndex - 1]
    const nextItem = data[currentIndex + 1]

    return (
        <main className={styles.Container_main}>
            <h1>{item.name}</h1>

            <Image
                src={item.imageUrl}
                alt={item.model}
                width={600}
                height={300}
                loading="eager"
            />

            <p>Classe: {item.category}</p>
            <h2>Modelo: {item.model}</h2>
            <p>{item.description}</p>

            <div className={styles.navigation}>
                {prevItem ? (
                    <Link href={`/Nave/${prevItem.id}`}>⬅ Anterior</Link>
                ) : (
                    <button disabled>⬅ Anterior</button>
                )}

                {nextItem ? (
                    <Link href={`/Nave/${nextItem.id}`}>Próxima ➡</Link>
                ) : (
                    <button disabled>Próxima ➡</button>
                )}
            </div>

            <Link href="/Naves">Voltar Para Espaçonaves</Link>
        </main>
    )
}
