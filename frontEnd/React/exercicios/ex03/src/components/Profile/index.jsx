import styles from "./style.module.css"

export default function profile(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img
                        src={props.img}
                        className={styles.img}
                        alt={props.name}
                    />
                </div>
                <div className={styles.sumary}>
                    <h2 className={styles.name}>{props.name}</h2>
                    <hr />
                    <p className={styles.bio}>{props.bio}</p>
                    <hr />
                    <p className={styles.phone}>{props.phone}</p>
                    <hr />
                    <div className={styles.email}>{props.email}</div>
                    <hr />
                    <div className={styles.url}>
                        <a
                            href={props.githubUrl}
                            target="_blank"
                            className={styles.githubUrl}
                        >
                            GitHub
                        </a>
                        <a
                            href={props.linkedinUrl}
                            target="_blank"
                            className={styles.linkedinUrl}
                        >
                            Linkedin
                        </a>
                        <a
                            href={props.twitterUrl}
                            target="_blank"
                            className={styles.twitterUrl}
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
