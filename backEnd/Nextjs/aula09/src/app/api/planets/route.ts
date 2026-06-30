import { NextRequest, NextResponse } from "next/server"

let idSequence = 3

let planets = [
    {
        id: 1,
        name: "Mercúrio",
        description:
            "Mercurio e o menor e mais intenso planeta do sistema solar",
        imageUrl:
            "https://images.pexels.com/photos/20376399/pexels-photo-20376399.jpeg",
    },
    {
        id: 2,
        name: "Vênus",
        description:
            "vênus e o segundo planeta do sistema solar em ordem de distancia do sol",
        imageUrl:
            "https://images.pexels.com/photos/20376407/pexels-photo-20376407.jpeg",
    },
]

export function GET(req: NextRequest) {
    return NextResponse.json(planets)
}

export async function POST(req: NextRequest) {
    const { name, description, imageUrl } = await req.json()

    const newPlanet = {
        id: idSequence++,
        name: name,
        description: description,
        imageUrl: imageUrl,
    }

    planets.push(newPlanet)

    return NextResponse.json(newPlanet, { status: 201 })
}

export async function PUT(req: NextRequest) {
    const { id, name, description, imageUrl } = await req.json()

    const planetIndex = planets.findIndex((planet) => planet.id === +id)
    if (planetIndex === -1) {
        return NextResponse.json(
            { error: "Planeta não encontrado" },
            { status: 404 },
        )
    }

    if (name) planets[planetIndex].name = name
    if (description) planets[planetIndex].description = description
    if (imageUrl) planets[planetIndex].imageUrl = imageUrl

    return NextResponse.json(planets[planetIndex])
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json()

    const planetIndex = planets.findIndex((planet) => planet.id === +id)
    if (planetIndex === -1) {
        return NextResponse.json(
            { error: "Planeta não encontrado" },
            { status: 404 },
        )
    }

    const [deletedPlanet] = planets.splice(planetIndex, 1)

    return NextResponse.json({ deletedPlanet })
}
