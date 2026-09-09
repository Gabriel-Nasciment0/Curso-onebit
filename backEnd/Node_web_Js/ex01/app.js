const express = require("express")

const path = require("path")

const app = express()
const PORT = 3000

//Configuração
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

//Array em memoria
const emails = []

//pagina inicial
app.get("/", (req, res) => {
    res.render("index")
})

//cadastro do e-mail
app.post("/cadastrar", (req, res) => {
    const { email } = req.body

    if (!email) {
        res.redirect("/")
    }

    emails.push(email)

    res.redirect("/sucesso")
})

//pagina com todos os e-mails
app.get("/emails", (req, res) => {
    res.render("emails", { emails })
})

//Excluir e-mail
app.post("/emails/excluir", (req, res) => {
    const { email } = req.body

    const index = emails.indexOf(email)

    if (index !== -1) {
        emails.splice(index, 1)
    }

    res.redirect("/emails")
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
})
