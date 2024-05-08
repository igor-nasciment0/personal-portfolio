import { useContext } from "react"
import LanguageContext from "../../../../../../context"
import WhoContent from "./content";

export default function WhoIAm() {
    
    const language = useContext(LanguageContext);
    const content = WhoContent[language];
    
    return (
        <div className="plain-text">
            <h1>{content.title}</h1>
            <hr />

            <p>{content.p1}</p>

            <p>{content.p2}</p>

            <p>{content.p3}</p>

            <p>{content.p4}</p>
        </div>
    )
}