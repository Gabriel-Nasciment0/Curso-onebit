const fs = require("node:fs")
console.log("inicio")

fs.readFile("./texto.txt", "utf-8", (err, data) => {
    if (err) throw err
    console.log(data)
})

console.log("fim")
