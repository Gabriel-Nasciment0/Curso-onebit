import express from "express"

import { sequelize } from "./database"

import { adminJs, adminJsRouter } from "./adminjs"

const app = express()

// Arquivos estáticos
app.use(express.static("public"))

// Rotas do AdminJS
app.use(adminJs.options.rootPath, adminJsRouter)

// Porta do servidor
const PORT = process.env.PORT || 3000

// Inicialização do servidor
const startServer = async () => {
    try {
        // Verifica a conexão com o PostgreSQL
        await sequelize.authenticate()

        console.log("Database connection successful")

        // Inicia o servidor somente após conectar ao banco
        app.listen(PORT, () => {
            console.log(`Server started successfully at port ${PORT}`)

            console.log(`AdminJS available at http://localhost:${PORT}/admin`)
        })
    } catch (error) {
        console.error("Server initialization failed:", error)

        process.exitCode = 1
    }
}

startServer()
