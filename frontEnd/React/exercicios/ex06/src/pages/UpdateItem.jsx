import { useLoaderData, useNavigate } from "react-router-dom"
import { useItems } from "../hooks/useItems"
import ItemForm from "../components/ItemForm"

export default function UpdateItem() {
    const item = useLoaderData()
    const { updateItem } = useItems()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const updated = {
            ...item,
            name: formData.get("name"),
            quantity: Number(formData.get("quantity")),
            price: Number(formData.get("price")),
            category: formData.get("category"),
            description: formData.get("description"),
        }
        updateItem(updated)
        navigate(`/item/${item.id}`)
    }

    return (
        <ItemForm
            onSubmit={handleSubmit}
            defaultValues={item}
        />
    )
}
