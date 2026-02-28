import { Outlet, Link } from "react-router-dom"

export default function RootLayout() {
    return (
        <>
            <nav>
                <Link to="/">Dashboard</Link> | {""}
                <Link to="/items">Itens</Link> | {""}
                <Link to="/items/new">Novo Item</Link>
            </nav>

            <hr />

            <Outlet />
        </>
    )
}
