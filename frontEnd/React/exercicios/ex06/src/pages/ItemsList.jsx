import { Link } from "react-router-dom"
import { useItems } from "../hooks/useItems"
import styles from "./ItemsList.module.css"
export default function ItemsList() {
    const { items, deleteItem } = useItems()

    return (
        <>
            <h1>Stock Items</h1>

            {items.map((item) => (
                <div
                    className={styles.item_container}
                    key={item.id}
                >
                    <p>{item.name}</p>
                    <p>{item.quantity} unid.</p>
                    <div>
                        <Link to={`/items/${item.id}`}>Ver</Link>
                        <Link to={`/items/${item.id}/edit`}>Editar</Link>
                        <button onClick={() => deleteItem(item.id)}>
                            Excluir
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
