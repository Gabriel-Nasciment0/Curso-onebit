const Product = require("../models/product")

const productsController = {
    // GET /products
    index: async (req, res, next) => {
        try {
            const products = await Product.findAll()
            res.json(products)
        } catch (error) {
            next(error)
        }
    },

    // GET /products/:id
    show: async (req, res, next) => {
        try {
            const product = await Product.findById(req.params.id)

            if (!product) {
                return res.status(404).json({
                    error: "Product not found.",
                })
            }

            res.json(product)
        } catch (error) {
            next(error)
        }
    },

    // POST /products
    create: async (req, res, next) => {
        try {
            const {
                name,
                description = null,
                price,
                stockQuantity,
                isActive = true,
            } = req.body

            if (
                typeof name !== "string" ||
                !name.trim() ||
                price === undefined ||
                !Number.isFinite(Number(price)) ||
                stockQuantity === undefined ||
                !Number.isInteger(Number(stockQuantity)) ||
                Number(stockQuantity) < 0
            ) {
                return res.status(400).json({
                    error: "Name, valid price and stockQuantity are required.",
                })
            }

            if (Number(price) < 0) {
                return res.status(400).json({
                    error: "Price must be zero or greater.",
                })
            }

            if (typeof isActive !== "boolean") {
                return res.status(400).json({
                    error: "isActive must be a boolean.",
                })
            }

            const product = await Product.create({
                name: name.trim(),
                description,
                price: Number(price),
                stockQuantity: Number(stockQuantity),
                isActive,
            })

            res.status(201).json(product)
        } catch (error) {
            next(error)
        }
    },

    // PUT /products/:id
    update: async (req, res, next) => {
        try {
            const { name, description, price, stockQuantity, isActive } =
                req.body

            if (
                name !== undefined &&
                (typeof name !== "string" || !name.trim())
            ) {
                return res.status(400).json({
                    error: "Name must be a non-empty string.",
                })
            }

            if (
                price !== undefined &&
                (!Number.isFinite(Number(price)) || Number(price) < 0)
            ) {
                return res.status(400).json({
                    error: "Price must be a valid non-negative number.",
                })
            }

            if (
                stockQuantity !== undefined &&
                (!Number.isInteger(Number(stockQuantity)) ||
                    Number(stockQuantity) < 0)
            ) {
                return res.status(400).json({
                    error: "stockQuantity must be a non-negative integer.",
                })
            }

            if (isActive !== undefined && typeof isActive !== "boolean") {
                return res.status(400).json({
                    error: "isActive must be a boolean.",
                })
            }

            const attributes = {
                ...(name !== undefined && { name: name.trim() }),
                ...(description !== undefined && { description }),
                ...(price !== undefined && { price: Number(price) }),
                ...(stockQuantity !== undefined && {
                    stockQuantity: Number(stockQuantity),
                }),
                ...(isActive !== undefined && { isActive }),
            }

            const product = await Product.update(req.params.id, attributes)

            if (!product) {
                return res.status(404).json({
                    error: "Product not found.",
                })
            }

            res.json(product)
        } catch (error) {
            next(error)
        }
    },

    // DELETE /products/:id
    delete: async (req, res, next) => {
        try {
            const product = await Product.delete(req.params.id)

            if (!product) {
                return res.status(404).json({
                    error: "Product not found.",
                })
            }

            res.json({
                message: "Product deleted successfully.",
                product,
            })
        } catch (error) {
            next(error)
        }
    },
}

module.exports = productsController
