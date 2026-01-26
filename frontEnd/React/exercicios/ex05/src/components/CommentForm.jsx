import { useState } from "react"

export default function CommentForm({ onSubmit }) {
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (!email || !comment) return

        onSubmit({ email, comment })
        
        setEmail("")
        setComment("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Comentario</label>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Enviar Comentario</button>
        </form>
    )
}
