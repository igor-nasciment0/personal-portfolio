import Certificates from "./content/certificates";
import Presentation from "./content/presentation";
import Skills from "./content/skills";
import File from "../../types/file.tsx";
import Section from "../../types/section.ts";
import Education from "./content/education";

const professionalSection: Section = {
    name: {
        pt_br: "info-profissional",
        en_us: "professional-info"
    },
    icon: 'professional-info-icon.svg',
    files: [
        new File('apresentacao.md', 'presentation.md', Presentation),
        new File('educacao.md', 'education.md', Education),
        new File('habilidades.md', 'skills.md', Skills),
        new File('certificados.md', 'certificates.md', Certificates),
    ]
}



export default professionalSection;