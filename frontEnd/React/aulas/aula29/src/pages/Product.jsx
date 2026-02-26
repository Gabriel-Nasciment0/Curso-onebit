import { Link, useParams } from "react-router-dom"
import products from "../../database.json"
export default function Product() {
    const { productId } = useParams()

    const product = products.find((p) => p.id === +productId)

    if (!product) {
        return <h2>Produto não encontrado</h2>
    }

    return (
        <section>
            <Link to={"/products"}>
                <button>Voltar</button>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button>Comprar</button>
            </Link>
        </section>
    )
}
