import { LanguageContent } from "../../../../../../context";

const SkillsContent: LanguageContent = {
    pt_br: {
        title: "Habilidades",

        hs_subtitle: "Habilidades técnicas",
        hs_p: "As principais habilidades técnicas com as quais já possuo familiaridade são:",
        hs_p2: "Possuo ainda entendimento do ",
        hs_p2_highlight: "inglês ",
        hs_p2_part2: "falado e escrito.",

        ss_subtitle: "Habilidades comportamentais",
        ss_p: "As principais habilidades comportamentais com as quais me identifico são:",
    },

    en_us: {
        title: "Skills",

        hs_subtitle: "Hard Skills",
        hs_p: "The main hard skills with which I am already familiar are:",
        hs_p2: "I also have understanding of the ",
        hs_p2_highlight: "English language, ",
        hs_p2_part2: "written and spoken.",

        ss_subtitle: "Soft Skills",
        ss_p: "The main soft skills with which I identify myself are",
    },
}

export default SkillsContent;

export interface skill {
    title: {
        pt_br: string,
        en_us: string,
        [key: string]: string
    },
    description: {
        pt_br: string,
        en_us: string,
        [key: string]: string
    }
}