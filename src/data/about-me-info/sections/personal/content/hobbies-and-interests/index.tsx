import { useContext } from "react"
import LanguageContext from "../../../../../../context"
import HobbiesContent from "./content";

export default function Hobbies() {

    const language = useContext(LanguageContext);
    const content = HobbiesContent[language];

    return (
        <div className="plain-text">
            <h1>{content.title}</h1>
            <hr />

            <h2>{content.hobbies_subtitle}</h2>
            {content.hobbie1}
            {content.hobbie2}
            {content.hobbie3}

            <h2>{content.interests_subtitle}</h2>
            {content.interest}
        </div>
    )
}