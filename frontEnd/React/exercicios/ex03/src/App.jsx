import Profile from "./components/Profile/index"
import profileImg from "./assets/pexels-jit-roy-2028348030-31374567.jpg"

function App() {
    return (
        <>
            <Profile
                img={profileImg}
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
