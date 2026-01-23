import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameColection"

function App() {
    const { games, addGame, removeGame } = useGameCollection()

    return (
        <>
            <div id="app">
                <h1>Biblioteca de jogos</h1>
                <NewGameForm addGame={addGame} />
                <div className="games">
                    {games.length > 0 ? (
                        games.map((game) => (
                            <Game
                                key={game.id}
                                title={game.title}
                                cover={game.cover}
                                onRemove={() => removeGame(game.id)}
                            />
                        ))
                    ) : (
                        <h2>Nao tem nada aqui</h2>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
