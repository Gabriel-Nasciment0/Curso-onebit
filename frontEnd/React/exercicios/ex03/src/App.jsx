import Profile from "./components/Profile/index"

function App() {
    return (
        <>
            <Profile
                name="John Doe"
                bio="Full-stack javascript developer at Acme Inc."
                phone="+5511987654321"
                email="jonh.doe@email.com"
                githubUrl="GitHub"
                linkedinUrl="Linkedin"
                twitterUrl="Twitter"
            />
        </>
    )
}

export default App
