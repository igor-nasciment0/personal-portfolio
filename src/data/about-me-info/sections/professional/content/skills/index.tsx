import { useContext } from "react"
import LanguageContext from "../../../../../../context"
import SkillsContent from "./content";
import HardSkills from "./hardskills";
import SoftSkills from "./softskills";

export default function Skills() {

    const language = useContext(LanguageContext);
    const content = SkillsContent[language];

    return (
        <div className="plain-text">
            <h1>{content.title as string}</h1>
            <hr />
            <h2>{content.hs_subtitle as string}</h2>
            <p>{content.hs_p as string}</p>

            <ul>
                {HardSkills.map(skill => 
                    <li><b>{skill.title[language]}</b> {skill.description[language]}</li>
                )}
            </ul>

            <p>{content.hs_p2} <b>{content.hs_p2_highlight}</b> {content.hs_p2_part2}</p>
            
            <h2>{content.ss_subtitle}</h2>
            <p>{content.ss_p}</p>
            <ul>
                {SoftSkills.map(skill => 
                    <li><b>{skill.title[language]}</b> {skill.description[language]}</li>
                )}
            </ul>
        </div>
    )
}