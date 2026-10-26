const express = require("express")
const router = express.Router()
const { prisma } = require("../database")

// GET /tags - Listar tags
router.get("/", async (req, res, next) => {
    try {
        const tags = await prisma.tag.findMany({
            orderBy: { id: "asc" },
        })

        res.json(tags)
    } catch (error) {
        next(error)
    }
})

// POST /tags - Criar tag
router.post("/", async (req, res, next) => {
    try {
        const { name } = req.body

        if (typeof name !== "string" || !name.trim()) {
            return res.status(400).json({
                error: "O nome da tag é obrigatório",
            })
        }

        const tag = await prisma.tag.create({
            data: {
                name: name.trim(),
            },
        })

        res.status(201).json(tag)
    } catch (error) {
        next(error)
    }
})

// GET /tags/:id - Buscar tag e posts relacionados
router.get("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        const tag = await prisma.tag.findUnique({
            where: { id },
            include: {
                posts: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        })

        if (!tag) {
            return res.status(404).json({
                error: "Tag não encontrada",
            })
        }

        res.json(tag)
    } catch (error) {
        next(error)
    }
})

// PUT /tags/:id - Atualizar tag
router.put("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const { name } = req.body

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        if (typeof name !== "string" || !name.trim()) {
            return res.status(400).json({
                error: "O nome da tag é obrigatório",
            })
        }

        const tag = await prisma.tag.update({
            where: { id },
            data: { name: name.trim() },
        })

        res.json(tag)
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                error: "Tag não encontrada",
            })
        }

        next(error)
    }
})

// DELETE /tags/:id - Excluir tag
router.delete("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        await prisma.tag.delete({
            where: { id },
        })

        res.status(204).send()
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                error: "Tag não encontrada",
            })
        }

        next(error)
    }
})

module.exports = router
