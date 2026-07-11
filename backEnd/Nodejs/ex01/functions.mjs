import fs from "node:fs"

export function createFile(text) {
    fs.writeFile("./arquivo.txt", text, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao escrever arquivo:", error.message)
            return
        }

        console.log("Arquivo criado com sucesso!")
    })
}

export function showFile() {
    fs.readFile("./arquivo.txt", "utf-8", (error, text) => {
        if (error) {
            console.log("Erro ao ler arquivo:", error.message)
            return
        }

        console.log(text)
    })
}

export function updateFile(newText) {
    fs.writeFile("./arquivo.txt", newText, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao atualizar arquivo:", error.message)
            return
        }

        console.log("Arquivo atualizado com sucesso!")
    })
}

export function deleteFile() {
    fs.unlink("./arquivo.txt", (error) => {
        if (error) {
            console.log("Erro ao excluir o arquivo:", error.message)
            return
        }

        console.log("Arquivo excluído com sucesso!")
    })
}
