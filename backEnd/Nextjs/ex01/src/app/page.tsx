import Image from "next/image"
import styles from "./page.module.scss"

const product = [
    {
        id: 1,
        image: {
            src: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
            alt: "MacBook Air",
            width: 420,
            height: 250,
        },
        name: "MacBook Air de 13 e 15 pol.",
        cpu: "Chip M2 ou M3",
        description:
            "Superfinos e rapidos para trabalhar, jogar ou criar onde quer que voce va.",
        price: "A partir de R$ 916,58/mes ou R$ 10.999*",
    },
    {
        id: 2,
        image: {
            src: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
            alt: "MacBook Pro",
            width: 420,
            height: 250,
        },
        name: "MacBook Pro de 14 e 16 pol.",
        cpu: "Chip M3, M3 Pro ou M3 Max",
        description:
            "Os notbooks Mac mais avançados para fluxos de trabalho pesados.",
        price: "A partir de R$ 1.541,58/mes ou R$ 18.499*",
    },
]
export default function Home() {
    return (
        <main className={styles.page}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Conheça a familia Macbook.</h1>
                <p className={styles.description}>Agora com novos modelos M3</p>
            </div>
            <div className={styles.cardContainer}>
                {product.map((item) => (
                    <article
                        key={item.id}
                        className={styles.card}
                    >
                        <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            width={item.image.width}
                            height={item.image.height}
                            loading="lazy"
                        />
                        <h2 className={styles.name}>{item.name}</h2>
                        <p className={styles.cpu}>{item.cpu}</p>
                        <p className={styles.description}>{item.description}</p>
                        <p className={styles.price}>{item.price}</p>

                        <div className="buttons">
                            <button className={styles.button}>Comprar</button>
                            <button className={styles.button}>
                                Saiba mais
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    )
}
