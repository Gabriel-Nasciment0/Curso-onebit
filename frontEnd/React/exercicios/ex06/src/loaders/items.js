export function loadItem({ params }) {
    const items = JSON.parse(localStorage.getItem("items")) || []

    const item = items.find((i) => i.id === params.itemId)

    if (!item) {
        throw new Response("Item não encontrado", { status: 404 })
    }

    return item
}
