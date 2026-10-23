const { query } = require("../database")

class Product {
    constructor(productRow) {
        this.id = productRow.id
        this.name = productRow.name
        this.description = productRow.description
        this.price = Number(productRow.price)
        this.stockQuantity = productRow.stock_quantity
        this.isActive = productRow.is_active
        this.createdAt = productRow.created_at
        this.updatedAt = productRow.updated_at
    }

    static async findAll() {
        const result = await query("SELECT * FROM products ORDER BY id")

        return result.rows.map((row) => new Product(row))
    }

    static async findById(id) {
        const result = await query("SELECT * FROM products WHERE id = $1", [id])

        return result.rows[0] ? new Product(result.rows[0]) : null
    }

    static async create({
        name,
        description,
        price,
        stockQuantity,
        isActive = true,
    }) {
        const result = await query(
            `INSERT INTO products
                (name, description, price, stock_quantity, is_active)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [name, description, price, stockQuantity, isActive],
        )

        return new Product(result.rows[0])
    }

    static async update(id, attributes) {
        const currentProduct = await Product.findById(id)

        if (!currentProduct) {
            return null
        }

        const updatedProduct = {
            name: attributes.name ?? currentProduct.name,
            description: attributes.description ?? currentProduct.description,
            price: attributes.price ?? currentProduct.price,
            stockQuantity:
                attributes.stockQuantity ?? currentProduct.stockQuantity,
            isActive: attributes.isActive ?? currentProduct.isActive,
        }

        const result = await query(
            `UPDATE products
             SET name = $1,
                 description = $2,
                 price = $3,
                 stock_quantity = $4,
                 is_active = $5,
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $6
             RETURNING *`,
            [
                updatedProduct.name,
                updatedProduct.description,
                updatedProduct.price,
                updatedProduct.stockQuantity,
                updatedProduct.isActive,
                id,
            ],
        )

        return new Product(result.rows[0])
    }

    static async delete(id) {
        const result = await query(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            [id],
        )

        return result.rows[0] ? new Product(result.rows[0]) : null
    }
}

module.exports = Product
