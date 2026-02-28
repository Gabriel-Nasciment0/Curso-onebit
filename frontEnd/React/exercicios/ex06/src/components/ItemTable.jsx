import { Link } from "react-router-dom"

export default function ItemTable({ items, onDelete }) {
    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    {item.name} ({item.quantity})
                    <Link to={`/items/${item.id}`}>Ver</Link>
                    <Link to={`/items/${item.id}/edit`}>Editar</Link>
                    <button onClick={() => onDelete(item.id)}>Excluir</button>
                </div>
            ))}
        </>
    )
}
