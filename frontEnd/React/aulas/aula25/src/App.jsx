import { useEffect } from "react"
import { useState } from "react"

async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await response.json()
    return data.results
}
function App() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetchPokemon().then((results) => {
            console.log(`operação realizada`)
            console.log(results)
            setPokemon(results)
        })
    }, [])

    return (
        <>
            <div className="app">
                <div>
                    <h2>Pokedex</h2>
                    <ul className="pokemon">
                        {pokemon.map((poke) => (
                            <li key={poke.name}>
                                <span>{poke.name}</span>
                                <button>Ver detalhes</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
