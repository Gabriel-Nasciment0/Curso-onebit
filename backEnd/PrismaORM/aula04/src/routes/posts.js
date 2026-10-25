const express = require("express")
const router = express.Router()
const { prisma } = require("../database")

// GET /posts - Listar todos os posts
router.get("/", async (req, res, next) => {
    try {
        const posts = await prisma.post.findMany()
        res.json(posts)
    } catch (error) {
        next(error)
    }
})

// GET /posts/:id - Buscar post por ID
router.get("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: "ID inválido" })
        }

        const post = await prisma.post.findUnique({
            where: { id },
        })

        if (!post) {
            return res.status(404).json({ error: "Post não encontrado" })
        }

        res.json(post)
    } catch (error) {
        next(error)
    }
})

// POST /posts - Criar post
router.post("/", async (req, res, next) => {
    try {
        const { title, content, published, authorId } = req.body

        if (!title || typeof title !== "string") {
            return res.status(400).json({
                error: "O título é obrigatório",
            })
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId,
            },
        })

        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
})

// PUT /posts/:id - Atualizar post
router.put("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: "ID inválido" })
        }

        const { title, content, published, authorId } = req.body

        const data = {}

        if (title !== undefined) data.title = title
        if (content !== undefined) data.content = content
        if (published !== undefined) data.published = published
        if (authorId !== undefined) data.authorId = authorId

        const post = await prisma.post.update({
            where: { id },
            data,
        })

        res.json(post)
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: "Post não encontrado" })
        }

        next(error)
    }
})

// DELETE /posts/:id - Excluir post
router.delete("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: "ID inválido" })
        }

        await prisma.post.delete({
            where: { id },
        })

        res.status(204).send()
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: "Post não encontrado" })
        }

        next(error)
    }
})

module.exports = router
