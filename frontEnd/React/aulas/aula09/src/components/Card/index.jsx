import styles from "../../styles/App.module.css"

export default function card() {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img
                        src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
                        alt=""
                    />
                </div>
                <div className={styles.text}>
                    <h1>Poster: Star Wars (1977)</h1>
                    <p>
                        Um poster decorativo epico do filme Star Wars, com
                        moldura de MDF e tamanho A3. Uma ótima recordação de um
                        dos mais iconicos filmes de todos os tempos. Este
                        classico poster trara aventura, nostalgia e a magia de
                        Star Wars para qualquer lugar que voce decidir pendurar.
                        Não perca a chance de adicionar essa linda memoria ao
                        seu acervo!
                    </p>
                    <button className={styles.btn}>Comprar Agora</button>
                </div>
            </div>
        </div>
    )
}
