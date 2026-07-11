import { createFile, showFile, updateFile, deleteFile } from "./functions.mjs"

await createFile("arquivo criado")
await showFile()

console.log("====================")

await updateFile("arquivo re_escrito")
await showFile()

console.log("====================")

await deleteFile()
