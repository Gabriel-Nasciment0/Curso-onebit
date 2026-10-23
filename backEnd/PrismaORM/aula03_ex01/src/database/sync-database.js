const { query } = require("./index")

async function syncDatabase() {
    await query(`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10, 2) NOT NULL,
            stock_quantity INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        );
    `)

    await query(`
        CREATE TABLE IF NOT EXISTS customers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE
        );
    `)

    console.log("Tabelas products e customers verificadas.")
}

syncDatabase()
    .then(async () => {
        process.exitCode = 0
    })
    .catch((error) => {
        console.error("Erro ao sincronizar o banco:", error)
        process.exitCode = 1
    })
