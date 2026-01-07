import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./style.module.css"

export default function Profile(props) {
    // [valor , funcaoModificadora]
    const [FollowText, setFollowText] = useState("Follow")

    function handleClick() {
        alert("Seguindo")
        setFollowText("following")
    }

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
                    {FollowText}
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
