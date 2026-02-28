import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <Link to={"/"}>Dashboard</Link>
            <Link to={"/items"}>Itens</Link>
            <Link to={"/items/new"}>Novo Item</Link>
        </nav>
    )
}
