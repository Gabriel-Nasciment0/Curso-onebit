import { useState } from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
export default function CommentsSection() {
    const [comments, setComments] = useState([])

    function addComment({ email, comment }) {
        const newComment = {
            id: Date.now(),
            email,
            text: comment,
            createAt: new Date().toLocaleString("pt-Br"),
        }

        setComments((prev) => [newComment, ...prev])
    }
    return (
        <div id="commentsSection">
            <h1>Seção de comentários</h1>

            <CommentForm onSubmit={addComment} />

            {comments.length === 0 ? (
                <p>Seja o primeiro a comentar</p>
            ) : (
                comments.map((item) => (
                    <Comment
                        key={item.id}
                        email={item.email}
                        text={item.text}
                        createAt={item.createAt}
                    />
                ))
            )}
        </div>
    )
}
