import styles from "./style.module.css"

export default function geradorSenhas(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <div className="sectionButton">
                
            </div>
        </div>
    )
}
