import Profile from "./components/Profile/index"
import profileImg from "./assets/pexels-jit-roy-2028348030-31374567.jpg"

function App() {
    return (
        <div className="app">
            <Profile
                avatar={profileImg}
                name="John Doe"
                bio="Full-stack javascript developer at Acme Inc."
                email="john.doe@email.com"
                phone="+5511987654321"
                githubUrl="https://github.com"
                linkedinUrl="https://linkedin.com"
                twitterUrl="https://twitter.com"
            />
        </div>
    )
}

export default App
