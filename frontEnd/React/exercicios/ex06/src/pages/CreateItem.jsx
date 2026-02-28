import { useNavigate } from "react-router-dom"
import { useItems } from "../hooks/useItems"

export default function CreateItem() {
    const { addItem } = useItems()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const newItem = {
            id: crypto.randomUUID(),
            name: formData.get("name"),
            quantity: Number(formData.get("quantity")),
            price: Number(formData.get("price")),
            category: formData.get("category"),
            description: formData.get("description"),
            createdAt: new Date().toISOString(),
        }
        addItem(newItem)
        navigate("/items")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Nome"
                required
            />
            <input
                name="quantity"
                placeholder="Quantidade"
                required
            />
            <input
                name="price"
                type="number"
                placeholder="Preço"
                required
            />
            <input
                name="category"
                placeholder="Categoria"
                required
            />
            <textarea
                name="description"
                placeholder="Descrição"
            ></textarea>
            <button type="submit">Salvar</button>
        </form>
    )
}
