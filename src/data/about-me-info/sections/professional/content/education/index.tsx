import { useContext } from "react"
import LanguageContext from "../../../../../../context"
import EducationContent from "./content";

export default function Education() {

    const language = useContext(LanguageContext);

    return (
        <div className="plain-text">
            <h1>{EducationContent[language].title}</h1>
            <hr />
            <p>{EducationContent[language].p1} </p>

            <p>{EducationContent[language].p2}</p>

            <p>{EducationContent[language].p3}</p>

            <p>{EducationContent[language].p4}</p>
        </div>
    )
}