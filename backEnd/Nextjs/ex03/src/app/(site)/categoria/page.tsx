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

export default function categoriasIndex() {
    return (
        <main>
            <h1>Categorias de Naves</h1>
            <p>Explore as naves por categoria:</p>

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

            <Link href="/naves">← Voltar para todas as naves</Link>
        </main>
    )
}
