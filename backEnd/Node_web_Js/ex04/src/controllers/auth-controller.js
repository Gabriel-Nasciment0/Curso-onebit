const { JWT_SECRET } = require("../config/environment")
const users = require("../models/users")
const jwt = require("jsonwebtoken")

const publicUser = (user) => {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
}

module.exports = {
    // POST /auth/register
    register: (req, res) => {
        const { name, email, password } = req.body

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Invalid fields!",
            })
        }

        const registeredUser = users.registerUser(
            name.trim(),
            email.trim(),
            password,
        )

        if (!registeredUser) {
            return res.status(409).json({
                message: "Email already in use!",
            })
        }

        return res.status(201).json(publicUser(registeredUser))
    },

    // POST /auth/login
    login: (req, res) => {
        const { email, password } = req.body

        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Invalid fields!",
            })
        }

        const user = users.findByEmail(email.trim())

        if (!user || user.password !== password) {
            return res.status(401).json({
                message: "Invalid credentials!",
            })
        }

        const payload = {
            id: user.id,
            email: user.email,
        }

        const token = jwt.sign(payload, JWT_SECRET, {
            expiresIn: "1d",
        })

        return res.json({
            token,
            user: publicUser(user),
        })
    },
}
