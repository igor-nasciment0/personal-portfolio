import File from "../../types/file";
import Section from "../../types/section";
import Hobbies from "./content/hobbies-and-interests";
import WhoIAm from "./content/who-i-am";

const personalSection: Section = {
    name: 'personal-info',
    icon: 'personal-info-icon.svg',
    files: [
        new File('who-i-am.md', WhoIAm),
        new File('hobbies-and-interests.md', Hobbies)
    ]
}



export default personalSection;