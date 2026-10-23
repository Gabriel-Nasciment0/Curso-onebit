const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:12345@localhost:5432/node_postgres",
})

async function query(queryString, params = []) {
    return pool.query(queryString, params)
}

module.exports = { query }
