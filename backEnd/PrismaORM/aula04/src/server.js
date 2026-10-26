const express = require("express")
const usersRouter = require("./routes/users")
const postsRouter = require("./routes/posts")
const tagsRouter = require("./routes/tags")

const app = express()

app.use(express.json())

app.use("/users", usersRouter)
app.use("/posts", postsRouter)
app.use("/tags", tagsRouter)

app.use((error, req, res, next) => {
    console.error(error)

    if (res.headersSent) {
        return next(error)
    }

    res.status(500).json({
        error: "Erro interno do servidor",
    })
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000")
})
