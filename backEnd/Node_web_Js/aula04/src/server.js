const express = require("express")
const path = require("node:path")

const app = express()

const storedUsers = []

// Configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true }))

// Configuração das views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ username, password })

    res.redirect("/usuarios")
})

app.get("/usuarios", (req, res) => {
    res.render("users", { users: storedUsers })
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
