import { useState } from "react"
import "./css/App.css"

function App() {
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const [comments, setComments] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if (!email || !comment) return

        const newComment = {
            id: Date.now(),
            email,
            text: comment,
            createdAt: new Date().toLocaleString("pt-Br"),
        }

        setComments((prev) => [newComment, ...prev])

        setEmail("")
        setComment("")
    }
    return (
        <>
            <div id="app">
                <h1>Seção de comentários</h1>

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

                {comments.length === 0 ? (
                    <p>Seja o primeiro a comentar</p>
                ) : (
                    comments.map((item) => (
                        <div
                            key={item.id}
                            className="comment"
                        >
                            <strong>{item.email}</strong>
                            <p>Em {item.createdAt}</p>
                            <p>{item.text}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default App
