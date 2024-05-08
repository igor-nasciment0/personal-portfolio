interface Page {
    pt_br: string,
    en_us: string,
    [key: string]: string
}

interface HeaderContent {
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
    }
}

export default HeaderContent;