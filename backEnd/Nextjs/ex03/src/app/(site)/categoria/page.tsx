import data from "@/data/spaceships.json"
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
    params: { category: string }
}

export default function Categoria({ params }: Props) {
    const filtered = data.filter(
        (item) => formatSlug(item.category) === params.category,
    )

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
                <h2>Categoria: {params.category}</h2>

                {filtered.length > 0 ? (
                    filtered.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma nave encontrada nessa categoria.</p>
                )}
            </div>
        </main>
    )
}
