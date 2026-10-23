const { query } = require("../database")

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
    }

    static async findAll() {
        const result = await query("SELECT * FROM customers ORDER BY id")

        return result.rows.map((row) => new Customer(row))
    }

    static async findById(id) {
        const result = await query("SELECT * FROM customers WHERE id = $1", [
            id,
        ])

        return result.rows[0] ? new Customer(result.rows[0]) : null
    }

    static async create({ name, email }) {
        const result = await query(
            `INSERT INTO customers (name, email)
             VALUES ($1, $2)
             RETURNING *`,
            [name, email],
        )

        return new Customer(result.rows[0])
    }

    static async update(id, attributes) {
        const customer = await Customer.findById(id)

        if (!customer) {
            return null
        }

        const name = attributes.name ?? customer.name
        const email = attributes.email ?? customer.email

        const result = await query(
            `UPDATE customers
             SET name = $1, email = $2
             WHERE id = $3
             RETURNING *`,
            [name, email, id],
        )

        return new Customer(result.rows[0])
    }

    static async delete(id) {
        const result = await query(
            "DELETE FROM customers WHERE id = $1 RETURNING *",
            [id],
        )

        return result.rows[0] ? new Customer(result.rows[0]) : null
    }
}

module.exports = Customer
