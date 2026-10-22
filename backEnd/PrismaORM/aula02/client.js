const { Client } = require("pg")
const client = new Client({
    connectionString: "postgres://postgres:12345@localhost:5432/node_postgres",
})

async function openConnection() {
    await client.connect()

    const result = await client.query("SELECT 1 + 1 AS soma;")
    console.log(result.rows)

    setTimeout(() => {
        client.end()
        console.log("Fechando conexão...")
    }, 5000)
}

openConnection()

// Tentar abrir uma segunda conexão com o cliente resulta em erro
openConnection()
