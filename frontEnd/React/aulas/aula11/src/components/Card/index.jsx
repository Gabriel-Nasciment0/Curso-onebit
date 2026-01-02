import styles from "../Card/styles.module.css"
import Button from "../Button/index"

export default function card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img
                        src={props.posterImg}
                        alt={props.title}
                    />
                </div>
                <div className={styles.text}>
                    <h1>{props.title}</h1>
                    <p>
                        Um poster decorativo epico do filme Star Wars, com
                        moldura de MDF e tamanho A3. Uma ótima recordação de um
                        dos mais iconicos filmes de todos os tempos. Este
                        classico poster trara aventura, nostalgia e a magia de
                        Star Wars para qualquer lugar que voce decidir pendurar.
                        Não perca a chance de adicionar essa linda memoria ao
                        seu acervo!
                    </p>
                    <Button />
                </div>
            </div>
        </div>
    )
}
