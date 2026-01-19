import { useState } from "react"
import styles from "./css/App.module.css"
import Input from "./components/inputs"

export default function App() {
    const [senha, setSenha] = useState("")
    const [textoBotao, setTextoBotao] = useState("Copiar")
    const [passwordSize, setPasswordSize] = useState(12)

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

        for (let i = 0; i < passwordSize; i++) {
            const index = Math.floor(Math.random() * caracteres.length)
            senhaGerada += caracteres[index]
        }

        setSenha(senhaGerada)
        setTextoBotao("Copiar")
    }

    function Copiar() {
        if (!senha) return
        navigator.clipboard.writeText(senha)
        setTextoBotao("Copiado!")
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Gerador de senhas</h1>

                <div>
                    <label htmlFor="passwordSize">Caracteres:</label>
                    <Input
                        passwordSize={passwordSize}
                        setPasswordSize={setPasswordSize}
                    />
                </div>

                <div className={styles.containerButton}>
                    <button
                        className={styles.gerar}
                        onClick={Gerar}
                    >
                        Gerar
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
