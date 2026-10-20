const express = require("express")

const authController = require("./controllers/auth-controller")
const usersController = require("./controllers/users-controller")
const welcomeController = require("./controllers/welcome-controller")

const {
    optionalAuth,
    ensureAuth,
    ensureAdmin,
} = require("./middlewares/auth-middleware")

const router = express.Router()

// Autenticação
router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

// Rota pública com autenticação opcional
router.get("/welcome", optionalAuth, welcomeController.index)

// Rotas administrativas
router.get("/users", ensureAuth, ensureAdmin, usersController.index)

router.get("/users/:id", ensureAuth, ensureAdmin, usersController.show)

router.post("/users", ensureAuth, ensureAdmin, usersController.save)

router.delete("/users/:id", ensureAuth, ensureAdmin, usersController.delete)

module.exports = router
