import { useLoaderData, Link } from "react-router-dom"

export default function ItemDetails() {
    const item = useLoaderData()

    return (
        <>
            <h1>{item.name}</h1>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: {item.price}</p>
            <p>Categoria: {item.category}</p>
            <p>{item.description}</p>

            <Link to={`/items/${item.id}/edit`}>Editar</Link>
        </>
    )
}
