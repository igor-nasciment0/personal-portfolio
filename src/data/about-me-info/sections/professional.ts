import { certificatesContent } from "../markdownText/professionalSection";
import File from "../types/file";
import Section from "../types/section";

const professionalSection: Section = {
    name: 'professional-info',
    icon: 'professional-info-icon.svg',
    files: [
        new File('certificates.md', certificatesContent)
    ]
}



export default professionalSection;