import { useRef, useState } from "react"
import "./App.css"
import RefExample from "./RefExample"

function App() {
    let variable = 0
    const [state, setState] = useState(0)

    const ref = useRef(0)

    const showValues = () => {
        alert(`
        Variavel: ${variable}
        Ref: ${ref.current}  
        State: ${state}
        `)
    }
    return (
        <>
            <div>
                <h1>Exemplo de useRef com o DOM</h1>
                <RefExample />
                <h1>Conhecendo o useRef</h1>
                <hr />
                <p>Variavel: {variable}</p>
                <p>Ref: {ref.current}</p>
                <p>State: {state}</p>
                <button onClick={() => variable++}>Aumentar Variavel</button>
                <button onClick={() => ref.current++}>Aumentar Ref</button>
                <button onClick={() => setState((state) => state + 1)}>
                    Aumentar State
                </button>
                <hr />
                <button onClick={showValues}>Exibir Valores</button>
            </div>
        </>
    )
}

export default App
