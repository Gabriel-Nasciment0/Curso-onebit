import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./style.module.css"

function handleClick(ev) {
    console.log(ev)
    alert("Seguindo")
}
export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img
                className={styles.avatar}
                src={props.avatar}
                alt={props.name}
            />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.fallowButton}
                    onClick={handleClick}
                >
                    Follow
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}
