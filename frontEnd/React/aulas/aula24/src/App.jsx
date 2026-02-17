import { useEffect, useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("funciona")

        return () => {
            console.log("Limpando...")
            console.log("Desmontado")
        }
    }, [counter])

    return (
        <button onClick={() => setCounter((count) => count + 1)}>
            Contador: {counter}
        </button>
    )
}

function App() {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Conhecendo o use Effect</h1>
            <div>
                <input
                    type="checkbox"
                    id="show"
                    value={show}
                    onChange={() => setShow((state) => !state)}
                />
                <label htmlFor="show">Exibir</label>
            </div>
            {show ? <Counter /> : null}
            <hr />
        </>
    )
}

export default App
