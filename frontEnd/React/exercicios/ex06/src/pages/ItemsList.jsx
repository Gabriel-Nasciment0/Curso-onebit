import { Link } from "react-router-dom"
import { useItems } from "../hooks/useItems"
import ItemTable from "../components/ItemTable"
export default function ItemsList() {
    const { items, deleteItem } = useItems()

    return (
        <>
            <h1>Itens</h1>

            {items.map((item) => (
                <div key={item.id}>
                    {item.name}({item.quantity})
                    <Link to={`/items/${item.id}`}>Ver</Link>
                    <button onClick={() => deleteItem(item.id)}>Excluir</button>
                </div>
            ))}
        </>
    )
}
