const Customer = require("../models/customer")

const customersController = {
    // GET /customers
    index: async (req, res, next) => {
        try {
            const customers = await Customer.findAll()
            res.json(customers)
        } catch (error) {
            next(error)
        }
    },

    // GET /customers/:id
    show: async (req, res, next) => {
        try {
            const customer = await Customer.findById(req.params.id)

            if (!customer) {
                return res.status(404).json({
                    error: "Customer not found.",
                })
            }

            res.json(customer)
        } catch (error) {
            next(error)
        }
    },

    // POST /customers
    create: async (req, res, next) => {
        try {
            const { name, email } = req.body

            if (
                typeof name !== "string" ||
                !name.trim() ||
                typeof email !== "string" ||
                !email.trim()
            ) {
                return res.status(400).json({
                    error: "Name and email are required.",
                })
            }

            const customer = await Customer.create({
                name: name.trim(),
                email: email.trim(),
            })

            res.status(201).json(customer)
        } catch (error) {
            next(error)
        }
    },

    // PUT /customers/:id
    update: async (req, res, next) => {
        try {
            const { name, email } = req.body

            if (
                (name !== undefined &&
                    (typeof name !== "string" || !name.trim())) ||
                (email !== undefined &&
                    (typeof email !== "string" || !email.trim()))
            ) {
                return res.status(400).json({
                    error: "Name and email must be non-empty strings.",
                })
            }

            const customer = await Customer.update(req.params.id, {
                ...(name !== undefined && { name: name.trim() }),
                ...(email !== undefined && { email: email.trim() }),
            })

            if (!customer) {
                return res.status(404).json({
                    error: "Customer not found.",
                })
            }

            res.json(customer)
        } catch (error) {
            next(error)
        }
    },

    // DELETE /customers/:id
    destroy: async (req, res, next) => {
        try {
            const customer = await Customer.delete(req.params.id)

            if (!customer) {
                return res.status(404).json({
                    error: "Customer not found.",
                })
            }

            res.json({
                message: "Customer deleted successfully.",
                customer,
            })
        } catch (error) {
            next(error)
        }
    },
}

module.exports = customersController
