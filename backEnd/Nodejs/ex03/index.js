const fs = require("node:fs/promises")
const path = require("node:path")
const readline = require("node:readline/promises")
const { stdin: input, stdout: output } = require("node:process")

const notesDirectory = path.join(__dirname, "notes")
const terminal = readline.createInterface({ input, output })

function formatNoteName(name) {
    return name.trim().replace(/[^a-zA-Z0-9-_]/g, "_")
}

async function getNotes() {
    const files = await fs.readdir(notesDirectory, { withFileTypes: true })
    return files
        .filter((file) => file.isFile() && path.extname(file.name) === ".txt")
        .map((file) => path.basename(file.name, ".txt"))
        .sort((first, second) => first.localeCompare(second))
}

async function createNote() {
    const name = formatNoteName(await terminal.question("Nome da anotacao: "))

    if (!name) {
        console.log("O nome da anotacao nao pode ficar vazio.")
        return
    }

    const content = await terminal.question("Conteudo da anotacao: ")
    const filePath = path.join(notesDirectory, `${name}.txt`)

    try {
        await fs.writeFile(filePath, content, { encoding: "utf8", flag: "wx" })
        console.log(`Anotacao \"${name}\" criada com sucesso.`)
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log("Ja existe uma anotacao com esse nome.")
            return
        }

        throw error
    }
}

async function listNotes() {
    const notes = await getNotes()

    if (notes.length === 0) {
        console.log("Nenhuma anotacao salva.")
        return
    }

    console.log("\nAnotacoes salvas:")
    notes.forEach((note, index) => console.log(`${index + 1}. ${note}`))
}

async function readNote() {
    const name = formatNoteName(await terminal.question("Nome da anotacao: "))
    const filePath = path.join(notesDirectory, `${name}.txt`)

    try {
        const content = await fs.readFile(filePath, "utf8")
        console.log(`\n--- ${name} ---\n${content}\n---------------`)
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Anotacao nao encontrada.")
            return
        }

        throw error
    }
}

async function deleteNote() {
    const name = formatNoteName(await terminal.question("Nome da anotacao: "))
    const filePath = path.join(notesDirectory, `${name}.txt`)

    try {
        await fs.unlink(filePath)
        console.log(`Anotacao \"${name}\" excluida com sucesso.`)
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Anotacao nao encontrada.")
            return
        }

        throw error
    }
}

async function showMenu() {
    console.log("\n=== Anotacoes Rapidas ===")
    console.log("1. Criar anotacao")
    console.log("2. Listar anotacoes")
    console.log("3. Ler anotacao")
    console.log("4. Excluir anotacao")
    console.log("5. Sair")

    return terminal.question("Escolha uma opcao: ")
}

async function main() {
    await fs.mkdir(notesDirectory, { recursive: true })

    let running = true
    while (running) {
        const option = (await showMenu()).trim()

        try {
            if (option === "1") await createNote()
            else if (option === "2") await listNotes()
            else if (option === "3") await readNote()
            else if (option === "4") await deleteNote()
            else if (option === "5") running = false
            else console.log("Opcao invalida. Escolha um numero de 1 a 5.")
        } catch (error) {
            console.error(
                "Nao foi possivel concluir a operacao:",
                error.message,
            )
        }
    }

    terminal.close()
    console.log("Ate logo!")
}

main()
