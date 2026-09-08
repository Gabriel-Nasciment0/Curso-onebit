const express = require("express")
const path = require("node:path")

const app = express()

const storedUsers = []

// ...

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ username, password })

    res.redirect("/usuarios")
})

app.get("/usuarios", (req, res) => {
    res.render("users", { users: storedUsers })
})

// ...
