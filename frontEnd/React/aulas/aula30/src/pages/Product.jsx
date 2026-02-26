import { Link, useParams } from "react-router-dom"
import products from "../../database.json"
export default function Product() {
    const { productId } = useParams()

    const product = products.find((p) => p.id === +productId)

    if (!product) {
        throw new Response("Oops... Esse produto não foi encontrado =(", {
            status: 404,
        })
    }

    // Exemplo de erro, descomente para testar
    // throw new Response("Não autorizado", { status: 401 })

    // Exemplo de erro, descomente para testar
    // throw new Response("Erro no servidor!", { status: 500 })
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
