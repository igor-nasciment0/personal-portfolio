import Certificates from "./content/certificates";
import Presentation from "./content/presentation";
import Skills from "./content/skills";
import File from "../../types/file.tsx";
import Section from "../../types/section.ts";
import Education from "./content/education";

const professionalSection: Section = {
    name: 'professional-info',
    icon: 'professional-info-icon.svg',
    files: [
        new File('presentation.md', Presentation),
        new File('education.md', Education),
        new File('skills.md', Skills),
        new File('certificates.md', Certificates),
    ]
}



export default professionalSection;