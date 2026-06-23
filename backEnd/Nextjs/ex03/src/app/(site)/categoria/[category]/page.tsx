import data from "@/data/spaceships.json"
import Image from "next/image"
import Link from "next/link"

const categories = [
    "Starfighter",
    "Freighter",
    "Corvette",
    "Capital Ship",
    "Patrol Craft",
    "Bomber",
    "Interceptor",
    "Transport",
]

const formatSlug = (value: string) =>
    value.toLowerCase().replace(/\s+/g, "-").trim()

type Props = {
    params: Promise<{ category: string }>
}

export default async function categoria({ params }: Props) {
    const { category } = await params
    const filtered = data.filter(
        (item) => formatSlug(item.category) === category,
    )

    if (filtered.length === 0) {
        return (
            <main>
                <h1>Categorias</h1>
                <div>
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={`/categoria/${formatSlug(cat)}`}
                        >
                            <button>{cat}</button>
                        </Link>
                    ))}
                </div>
                <p>
                    Nenhuma nave encontrada na categoria:{" "}
                    <strong>{category}</strong>
                </p>
                <Link href="/naves">← Voltar para todas as naves</Link>
            </main>
        )
    }

    return (
        <main>
            <h1>Categorias</h1>

            <div>
                {categories.map((cat) => (
                    <Link
                        key={cat}
                        href={`/categoria/${formatSlug(cat)}`}
                    >
                        <button>{cat}</button>
                    </Link>
                ))}
            </div>

            <div>
                <h2>Categoria: {category}</h2>

                {filtered.map((item) => (
                    <div key={item.id}>
                        <Link href={`/nave/${item.id}`}>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={200}
                                height={150}
                            />
                            <h3>{item.name}</h3>
                            <p>{item.model}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
