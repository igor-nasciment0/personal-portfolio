import File from "../../types/file";
import Section from "../../types/section";
import Hobbies from "./content/hobbies-and-interests";
import WhoIAm from "./content/who-i-am";

const personalSection: Section = {
    name: {
        pt_br:'info-pessoal',
        en_us: 'personal-info'
    },
    icon: 'personal-info-icon.svg',
    files: [
        new File('quem-sou-eu.md', 'who-i-am.md', WhoIAm),
        new File('hobbies-e-interesses.md', 'hobbies-and-interests.md', Hobbies)
    ]
}



export default personalSection;