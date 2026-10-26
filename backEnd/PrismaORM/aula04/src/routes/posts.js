const express = require("express")
const router = express.Router()
const { prisma } = require("../database")

// GET /posts - Listar posts com paginação
router.get("/", async (req, res, next) => {
    try {
        const page = Number(req.query.page ?? 1)
        const pageSize = Number(req.query.pageSize ?? 10)

        if (!Number.isInteger(page) || page < 1) {
            return res.status(400).json({
                error: "page deve ser um número inteiro maior que zero",
            })
        }

        if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
            return res.status(400).json({
                error: "pageSize deve ser um inteiro entre 1 e 100",
            })
        }

        const skip = (page - 1) * pageSize

        const [posts, totalPosts] = await Promise.all([
            prisma.post.findMany({
                skip,
                take: pageSize,
                orderBy: [{ createdAt: "desc" }, { id: "desc" }],
                include: {
                    author: true,
                    tags: true,
                },
            }),

            prisma.post.count(),
        ])

        const totalPages = Math.ceil(totalPosts / pageSize)

        res.json({
            posts,
            pagination: {
                page,
                pageSize,
                totalPosts,
                totalPages,
            },
        })
    } catch (error) {
        next(error)
    }
})

// GET /posts/search - Pesquisar posts com filtros
router.get("/search", async (req, res, next) => {
    try {
        const { title, authorId, published, startDate, endDate } = req.query

        const filter = {}

        // Filtrar pelo título
        if (title !== undefined) {
            if (typeof title !== "string") {
                return res.status(400).json({
                    error: "Título inválido",
                })
            }

            if (title.trim()) {
                filter.title = {
                    contains: title.trim(),
                    mode: "insensitive",
                }
            }
        }

        // Filtrar pelo autor
        if (authorId !== undefined) {
            const id = Number(authorId)

            if (!Number.isInteger(id) || id <= 0) {
                return res.status(400).json({
                    error: "authorId deve ser um número inteiro positivo",
                })
            }

            filter.authorId = id
        }

        // Filtrar pelo status de publicação
        if (published !== undefined) {
            if (published !== "true" && published !== "false") {
                return res.status(400).json({
                    error: "published deve ser true ou false",
                })
            }

            filter.published = published === "true"
        }

        // Validar datas no formato YYYY-MM-DD
        const isValidDate = (value) => {
            if (typeof value !== "string") return false
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

            const date = new Date(`${value}T00:00:00.000Z`)

            return (
                !Number.isNaN(date.getTime()) &&
                date.toISOString().slice(0, 10) === value
            )
        }

        if (startDate !== undefined && !isValidDate(startDate)) {
            return res.status(400).json({
                error: "startDate deve ser uma data válida no formato YYYY-MM-DD",
            })
        }

        if (endDate !== undefined && !isValidDate(endDate)) {
            return res.status(400).json({
                error: "endDate deve ser uma data válida no formato YYYY-MM-DD",
            })
        }

        if (startDate && endDate && startDate > endDate) {
            return res.status(400).json({
                error: "startDate não pode ser posterior a endDate",
            })
        }

        // Filtrar pela data de criação
        if (startDate || endDate) {
            filter.createdAt = {}

            if (startDate) {
                filter.createdAt.gte = new Date(`${startDate}T00:00:00.000Z`)
            }

            if (endDate) {
                const nextDay = new Date(`${endDate}T00:00:00.000Z`)
                nextDay.setUTCDate(nextDay.getUTCDate() + 1)

                filter.createdAt.lt = nextDay
            }
        }

        const posts = await prisma.post.findMany({
            where: filter,
            orderBy: [{ createdAt: "desc" }, { id: "desc" }],
            include: {
                author: true,
                tags: true,
            },
        })

        res.json(posts)
    } catch (error) {
        next(error)
    }
})

// GET /posts/:id - Buscar post por ID, autor e tags
router.get("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                author: true,
                tags: true,
            },
        })

        if (!post) {
            return res.status(404).json({
                error: "Post não encontrado",
            })
        }

        res.json(post)
    } catch (error) {
        next(error)
    }
})

// POST /posts - Criar post com tags
router.post("/", async (req, res, next) => {
    try {
        const { title, content, published, authorId, tags = [] } = req.body

        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                error: "O título é obrigatório",
            })
        }

        if (
            !Array.isArray(tags) ||
            !tags.every((tag) => tag && Number.isInteger(tag.id) && tag.id > 0)
        ) {
            return res.status(400).json({
                error: "tags deve ser uma lista de objetos com IDs válidos",
            })
        }

        const post = await prisma.post.create({
            data: {
                title: title.trim(),
                content,
                published,
                authorId,
                tags: {
                    connect: tags,
                },
            },
            include: {
                author: true,
                tags: true,
            },
        })

        res.status(201).json(post)
    } catch (error) {
        if (error.code === "P2025" || error.code === "P2003") {
            return res.status(400).json({
                error: "O autor ou uma das tags informadas não existe",
            })
        }

        next(error)
    }
})

// PUT /posts/:id - Atualizar post e suas tags
router.put("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        const { title, content, published, authorId, tags } = req.body

        const data = {}

        if (title !== undefined) {
            if (typeof title !== "string" || !title.trim()) {
                return res.status(400).json({
                    error: "O título deve ser uma string não vazia",
                })
            }

            data.title = title.trim()
        }

        if (content !== undefined) data.content = content
        if (published !== undefined) data.published = published
        if (authorId !== undefined) data.authorId = authorId

        if (tags !== undefined) {
            if (
                !Array.isArray(tags) ||
                !tags.every(
                    (tag) => tag && Number.isInteger(tag.id) && tag.id > 0,
                )
            ) {
                return res.status(400).json({
                    error: "tags deve ser uma lista de objetos com IDs válidos",
                })
            }

            data.tags = {
                set: tags,
            }
        }

        const post = await prisma.post.update({
            where: { id },
            data,
            include: {
                author: true,
                tags: true,
            },
        })

        res.json(post)
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                error: "Post, autor ou tag não encontrado",
            })
        }

        next(error)
    }
})

// DELETE /posts/:id - Excluir post
router.delete("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "ID inválido",
            })
        }

        await prisma.post.delete({
            where: { id },
        })

        res.status(204).send()
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                error: "Post não encontrado",
            })
        }

        next(error)
    }
})

module.exports = router
