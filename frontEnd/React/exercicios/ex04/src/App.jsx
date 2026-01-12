import GeradorSenhas from "./components/GeradorSenhas/index"
import "./css/App.css"

export default function App() {
    return (
        <>
            <GeradorSenhas
                title="Gerador de senhas"
                gerar="Gerar"
                copiar="Copiar"
            />
        </>
    )
}
