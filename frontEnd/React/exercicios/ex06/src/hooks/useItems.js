import { useState, useEffect } from "react"

export function useItems() {
    const [items, setItems] = useState(() => {
        const stored = localStorage.getItem("items")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    function addItem(item) {
        setItems((prev) => [...prev, item])
    }

    function deleteItem(id) {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

    function updateItem(updated) {
        setItems((prev) =>
            prev.map((item) => (item.id === updated.id ? updated : item)),
        )
    }

    return { items, addItem, deleteItem, updateItem }
}
