export default function comment({ email, text, createAt }) {
    return (
        <div className="comment">
            <strong>{email}</strong>
            <p>Em {createAt}</p>
            <p>{text}</p>
        </div>
    )
}
