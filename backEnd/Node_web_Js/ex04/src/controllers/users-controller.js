const users = require("../models/users")

const publicUser = (user) => {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
}

module.exports = {
    // GET /users
    index: (req, res) => {
        const allUsers = users.findAll().map(publicUser)

        return res.json(allUsers)
    },

    // GET /users/:id
    show: (req, res) => {
        const { id } = req.params
        const user = users.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found!",
            })
        }

        return res.json(publicUser(user))
    },

    // POST /users
    save: (req, res) => {
        const { name, email, password, role } = req.body

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !password ||
            !["admin", "standard"].includes(role)
        ) {
            return res.status(400).json({
                message: "Invalid fields!",
            })
        }

        const newUser = users.createUser(
            name.trim(),
            email.trim(),
            password,
            role,
        )

        if (!newUser) {
            return res.status(409).json({
                message: "Email already in use!",
            })
        }

        return res.status(201).json(publicUser(newUser))
    },

    // DELETE /users/:id
    delete: (req, res) => {
        const { id } = req.params
        const user = users.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found!",
            })
        }

        if (req.authenticatedUser.id === user.id) {
            return res.status(400).json({
                message: "You cannot delete your own account!",
            })
        }

        const deletedUser = users.deleteUser(id)

        if (!deletedUser) {
            return res.status(400).json({
                message: "Could not delete user!",
            })
        }

        return res.json(publicUser(deletedUser))
    },
}
