import Card from "./components/Card/index"
import swPosterImg from "./assets/img/sw-poster.jpg"
import esbPosterImg from "./assets/img/esb-poster.jpg"
import rotjPosterImg from "./assets/img/rotj-poster.jpg"

export default function App() {
    return (
        <>
            <h1>aula11</h1>
            <Card
                title="Poster: Star Wars (1997)"
                posterImg={swPosterImg}
            />
            <Card
                title="Poster: Empire Strikes Back (1980)"
                posterImg={esbPosterImg}
            />
            <Card
                title="Poster: Return of the Jedi (1983)"
                posterImg={rotjPosterImg}
            />
        </>
    )
}
