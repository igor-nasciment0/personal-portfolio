import { useContext } from "react"
import LanguageContext from "../../../../../../context"
import PresentationContent from "./content";

export default function Presentation() {

    const language = useContext(LanguageContext);

    return (
        <div className="plain-text">
            <h1>{PresentationContent[language].title}</h1>
            <hr />
            <p>{PresentationContent[language].p1}</p>

            <p>
                {PresentationContent[language].p2}
            </p>

            <p>{PresentationContent[language].p3}</p>
        </div>
    )
}