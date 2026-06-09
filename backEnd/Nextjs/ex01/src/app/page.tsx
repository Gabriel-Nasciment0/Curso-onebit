import Image from "next/image"
import styles from "./page.module.scss"

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Conheça a familia Macbook.</h1>
                <p className={styles.description}>Agora com novos modelos M3</p>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <Image
                        src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
                        alt="MacBook Pro"
                        width={420}
                        height={250}
                        loading="eager"
                    />
                    <h2 className={styles.cardTitle}>
                        MacBook Air de 13 e 15 pol.
                    </h2>
                    <h3 className={styles.cardDescription}>Chip M2 ou M3</h3>
                    <p className={styles.cardText}>
                        Superfinos e rapidos para trabalhas, jogar ou criar onde
                        quer que voce va.
                    </p>

                    <p className={styles.cardPrice}>
                        A partir de R$ 916,58/mes ou R$ 10.999*
                    </p>

                    <div className={styles.buttons}>
                        <button className={styles.button}>Saiba mais</button>
                        <button className={styles.button}>Comprar</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
                        alt="MacBook Pro"
                        width={420}
                        height={250}
                        loading="eager"
                    />
                    <h2 className={styles.cardTitle}>
                        MacBook Pro de 14 e 16 pol.
                    </h2>
                    <h3 className={styles.cardDescription}>
                        Chip M3, M3 Pro ou M3 Max
                    </h3>
                    <p className={styles.cardText}>
                        Os notbooks Mac mais avançados para fluxos de trabalho
                        pesados.
                    </p>
                    <p className={styles.cardPrice}>
                        A partir de R$ 1.541,58/mes ou R$ 18.499*
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Saiba mais</button>
                        <button className={styles.button}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
