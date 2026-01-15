import { useState } from "react"
import styles from "./style.module.css"

export default function geradorSenhas(props) {
    const [senha, setSenha] = useState("")
    const [textoBotao, setTextoBotao] = useState("Copiar")
    const [passwordSize, setPassworldSize] = useState(12)

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

        let senhaGerada = ""

        for (let index = 0; index < passwordSize; index++) {
            const senhaAleatoria = Math.floor(Math.random() * caracteres.length)

            const caractere = caracteres[senhaAleatoria]

            senhaGerada += caractere
        }
        setSenha(senhaGerada)
        setTextoBotao("Copiar")
    }

    function Copiar() {
        navigator.clipboard.writeText(senha)
        setTextoBotao("Copiado!")
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>{props.title}</h1>
                <div>
                    <label htmlFor="passwordSize">Caracteres:</label>
                    <input
                        type="number"
                        id="passwordSize"
                        min={1}
                        value={passwordSize}
                        onChange={(ev) => setPassworldSize(ev.target.value)}
                    />
                </div>
                <div className={styles.containerButton}>
                    <button
                        className={styles.gerar}
                        onClick={Gerar}
                    >
                        {props.gerar}
                    </button>
                    <button
                        className={styles.copiar}
                        onClick={Copiar}
                    >
                        {textoBotao}
                    </button>
                </div>
                <p className={styles.senha}>{senha}</p>
            </div>
        </div>
    )
}
