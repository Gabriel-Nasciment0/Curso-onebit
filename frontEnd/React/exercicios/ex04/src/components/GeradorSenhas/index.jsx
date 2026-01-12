import styles from "./style.module.css"

export default function geradorSenhas(props) {
    function Gerar() {
        let letraMinuscula = "abcdefghijklmnopqrstuvwxyz".split("")
        let letraMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        let numeros = "0123456789".split("")
        let simbolos = "!@#$%^&*()-_=+[]{}<>?/".split("")
        const caracteres = [
            ...letraMinuscula,
            ...letraMaiuscula,
            ...numeros,
            ...simbolos,
        ]
        const tamanhoSenha = Math.floor(Math.random() * caracteres.length)
        const caractere = caracteres[tamanhoSenha]
        
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.containerButton}>
                    <button className={styles.gerar}>{props.gerar}</button>
                    <button className={styles.copiar}>{props.copiar}</button>
                </div>
                <div className={styles.senha}></div>
            </div>
        </div>
    )
}
