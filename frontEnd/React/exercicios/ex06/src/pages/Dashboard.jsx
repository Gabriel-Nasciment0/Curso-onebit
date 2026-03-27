import { useItems } from "../hooks/useItems"
import styles from "./Dashboard.module.css"
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
            <div className={styles.container}>
                <h1>Dashboard</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <p>Tipos diferentes:</p>
                        <p>{totalTypes}</p>
                    </div>
                    <div className={styles.card}>
                        <p>Total em estoque:</p>
                        <p>{totalStock}</p>
                    </div>
                    <div className={styles.card}>
                        <p>Ùltimos 10 dias:</p>
                        <p>{lastTenDays.length}</p>
                    </div>
                    <div className={styles.card}>
                        <p>Estoque baixo:</p>
                        <p>{lowStock.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
