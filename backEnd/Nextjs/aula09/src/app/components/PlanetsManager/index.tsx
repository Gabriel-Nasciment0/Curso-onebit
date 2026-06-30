"use client"

import { useEffect, useState } from "react"
import { Planet, PlanetItem } from "../PlanetItem"
import { PlanetForm } from "../PlanetForm"
import styles from "./style.module.css"

export function PlanetsManager() {
    const [planets, setPlanets] = useState<Planet[]>([])

    useEffect(() => {
        const fetchPlanets = async () => {
            const response = await fetch("/api/planets")
            const data = await response.json()
            setPlanets(data)
        }
        fetchPlanets()
    }, [])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formElement = event.currentTarget
        const formData = new FormData(formElement)

        const name = formData.get("name")
        const description = formData.get("description")
        const imageUrl = formData.get("imageUrl")

        const res = await fetch(`/api/planets`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, imageUrl }),
        })

        if (res.ok) {
            const addedPlanet = await res.json()
            setPlanets([...planets, addedPlanet])
            formElement.reset()
        }
    }

    async function handleDelete(id: number) {
        await fetch(`/api/planets`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        })
        setPlanets((currentPlanets) =>
            currentPlanets.filter((planet) => planet.id !== id),
        )
    }

    return (
        <div className={styles.container}>
            <PlanetForm onSubmit={handleSubmit} />

            <section className={styles.planets}>
                {planets.map((planet) => (
                    <PlanetItem
                        key={planet.id}
                        planet={planet}
                        onDelete={handleDelete}
                    />
                ))}
            </section>
        </div>
    )
}
