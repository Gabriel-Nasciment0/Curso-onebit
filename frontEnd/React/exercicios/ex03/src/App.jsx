import Profile from "./components/Profile/index"

function App() {
    return (
        <>
            <h1>ex03</h1>
            <Profile
                name="John Doe"
                bio="Full-stack javascript developer at Acme Inc."
                phone="+5511987654321"
                email="jonh.doe@email.com"
                
            />
        </>
    )
}

export default App
