export default function App() {
    return (
        <div className="app">
            <img
                src="../src/assets/react.png"
                alt=""
            />
            <h1>React</h1>

            <p>a biblioteca para interfaces de usuario web e nativas</p>
            <div>
                <button>Aprenda React</button>
                <button>Referencia de API</button>
            </div>
            <hr />
            <h1>Crie interfaces de usuario de componentes</h1>
            <p>
                React permite que voce construa interfaces de usuario a partir
                de pedaços individuais chamados componentes.
            </p>
            <hr />
            <h1>Escreva componentes com codigo e marcação</h1>
            <p>
                Componentes React são funções JavaScript. A sintaxe de marcação
                e chamada de JSX. E uma extensão da sintaxe JavaScript
                popularizada pelo React .
            </p>
            <hr />
            <h1>Proximos passos</h1>
            <ul>
                <li>Uso de dados dinamicos no JSX</li>
                <li>Criação de novos componentes</li>
                <li>Estilização de componentes</li>
                <li>Reutilização de componentes</li>
                <li>Uso de props e children</li>
                <li>Uso de eventos do JavaScript</li>
            </ul>
        </div>
    )
}
