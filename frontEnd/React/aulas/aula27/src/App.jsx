import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

function App() {
    const user = {
        name: "Joao",
        email: "joao@email.com",
    }

    return (
        <>
            <UserContext.Provider value={user}>
                <Header />
                <h1>Usando Contexto</h1>
                <Container>
                    <p>Este e o nosso app com context</p>
                </Container>
            </UserContext.Provider>
            <div>{/* Nao tem contexto */}</div>
        </>
    )
}

export default App
