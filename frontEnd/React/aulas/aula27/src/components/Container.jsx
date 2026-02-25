import UserInfo from "./UserInfo";

export default function Container({ children }) {
    return (
        <div>
            <p>Container do app</p>
            <UserInfo />
            {children}
        </div>
    )
}
