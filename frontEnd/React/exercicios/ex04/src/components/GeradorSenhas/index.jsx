import { useState } from "react"
import styles from "./style.module.css"

export default function geradorSenhas(props) {
    const [senha, setSenha] = useState("")

    function Gerar() {
        const letraMinuscula = "abcdefghijklmnopqrstuvwxyz".split("")
        const letraMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        const numeros = "0123456789".split("")
        const simbolos = "!@#$%^&*()-_=+[]{}<>?/".split("")
        const caracteres = [
            ...letraMinuscula,
            ...letraMaiuscula,
            ...numeros,
            ...simbolos,
        ]

        let tamanhoSenha = 10
        let senhaGerada = ""

        for (let index = 0; index < tamanhoSenha; index++) {
            const senhaAleatoria = Math.floor(Math.random() * caracteres.length)

            const caractere = caracteres[senhaAleatoria]

            senhaGerada += caractere
        }
        setSenha(senhaGerada)
    }

    function Copiar() {}

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.containerButton}>
                    <button
                        className={styles.gerar}
                        onClick={Gerar}
                    >
                        {props.gerar}
                    </button>
                    <button className={styles.copiar}>{props.copiar}</button>
                </div>
                <div className={styles.senha}>{senha}</div>
            </div>
        </div>
    )
}
