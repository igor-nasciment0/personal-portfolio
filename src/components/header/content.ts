import { LanguageContent } from "../../context";

interface Page {
    pt_br: string,
    en_us: string,
    [key: string]: string
}

interface HeaderContent extends LanguageContent {
    page_home: Page,
    page_projects: Page,
    page_aboutme: Page
}

const HeaderContent: HeaderContent = {
    page_home: {
        pt_br: "_bem-vindo",
        en_us: "_hello"
    },

    page_projects: {
        pt_br: "_projetos",
        en_us: "_projects"
    },

    page_aboutme: {
        pt_br: "_sobre-mim",
        en_us: "_about-me"
    },

    pt_br: {
        copy_text: "clique para copiar",
        contact: "contato",
        copy_mail: "Email copiado!",
        copy_num: "Número copiado!"
    },

    en_us: {
        copy_text: "click to copy",
        contact: "contact_me",
        copy_mail: "Copied email!",
        copy_num: "Copied number!"
    }
}

export default HeaderContent;