import StatusText from "./components/StatusText"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/title/index"
import styles from "./App.module.css"

export default function App() {
    return (
        <div className={styles.app}>
            <Title />
            <Subtitle />
            <StatusText />
        </div>
    )
}
