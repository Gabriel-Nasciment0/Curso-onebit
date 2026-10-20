const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/environment")
const users = require("../models/users")

module.exports = {
    // Permite acesso sem token e identifica o usuário quando autenticado
    optionalAuth: (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return next()
        }

        const [scheme, token, ...extra] = authHeader.split(" ")

        if (scheme !== "Bearer" || !token || extra.length > 0) {
            return res.status(401).json({
                message: "Invalid authorization format!",
            })
        }

        try {
            const { id } = jwt.verify(token, JWT_SECRET)
            const user = users.findById(id)

            if (!user) {
                return res.status(401).json({
                    message: "User not found!",
                })
            }

            req.authenticatedUser = user

            return next()
        } catch (error) {
            return res.status(401).json({
                message: "Invalid token!",
            })
        }
    },

    // Exige um token válido
    ensureAuth: (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization header required!",
            })
        }

        const [scheme, token, ...extra] = authHeader.split(" ")

        if (scheme !== "Bearer" || !token || extra.length > 0) {
            return res.status(401).json({
                message: "Invalid authorization format!",
            })
        }

        try {
            const { id } = jwt.verify(token, JWT_SECRET)
            const user = users.findById(id)

            if (!user) {
                return res.status(401).json({
                    message: "User not found!",
                })
            }

            req.authenticatedUser = user

            return next()
        } catch (error) {
            return res.status(401).json({
                message: "Invalid token!",
            })
        }
    },

    // Exige que o usuário autenticado seja administrador
    ensureAdmin: (req, res, next) => {
        if (req.authenticatedUser?.role !== "admin") {
            return res.status(403).json({
                message: "Permission denied!",
            })
        }

        return next()
    },
}
