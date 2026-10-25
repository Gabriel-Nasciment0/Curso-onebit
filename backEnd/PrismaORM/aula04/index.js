require("dotenv/config.js")

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: "Isaac",
            email: "isaac@email.com",
            posts: {
                create: [
                    {
                        title: "Post 1",
                        content: "Conteúdo do post 1",
                    },
                ],
            },
        },
    })

    const result = await prisma.user.findMany({
        include: { posts: true },
    })

    console.log(result, result[0].posts)
}

main()
    .catch((error) => {
        console.error("Erro ao executar as operações:", error)
        process.exitCode = 1
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
