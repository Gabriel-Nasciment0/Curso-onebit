import { useState } from "react"

import "./App.css"
// Regra 1: Onde usar os hooks
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
