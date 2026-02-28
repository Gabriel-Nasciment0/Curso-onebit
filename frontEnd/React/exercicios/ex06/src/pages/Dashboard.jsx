import { useItems } from "../hooks/useItems"

export default function Dashboard() {
    const { items } = useItems()

    const totalTypes = items.length
    const totalStock = items.reduce((acc, i) => acc + i.quantity, 0)

    const lastTenDays = items.filter((i) => {
        const diff =
            (new Date() - new Date(i.createdAt)) / (1000 * 60 * 60 * 24)
        return diff <= 10
    })

    const lowStock = items.filter((i) => i.quantity < 10)

    return (
        <>
            <h1>Dashboard</h1>
            <p>Tipos diferentes: {totalTypes}</p>
            <p>Total em estoque: {totalStock}</p>
            <p>Ùltimos 10 dias: {lastTenDays.length}</p>
            <p>Estoque baixo: {lowStock.length}</p>
        </>
    )
}
