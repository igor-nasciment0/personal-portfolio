import { LanguageContent } from "../../../../../../context";

const CertificatesContent: LanguageContent = {
    pt_br: {
        title: "Certificados"
    },

    en_us: {
        title: "Certificates"
    }
}
export default CertificatesContent;


interface certificate {
    name: {
        pt_br: string,
        en_us: string
        [key: string]: string
    },
    imgPath: string,
    filePath: string
}

export const certificates: certificate[] = [
    {
        name: {
            pt_br: "Udemy: Estruturas de Dados e Algoritmos",
            en_us: "Udemy: Data Structures & Algorithms"
        },
        imgPath: "udemy-dsa.jpg",
        filePath: "udemy-dsa.pdf"
    },

    {
        name: {
            pt_br: "CS50: Introdução à Ciência da Computação (Harvard, Adaptado pela Fundação Estudar)",
            en_us: "CS50: Introduction to Computer Science (Harvard, Adapted by Fundação Estudar)"
        },
        imgPath: "cs50.jpg",
        filePath: "cs50.pdf"
    },
    {
        name: {
            pt_br: "Alura: vários cursos",
            en_us: "Alura: various courses"
        },
        imgPath: "alura.jpg",
        filePath: "alura.pdf"
    }
]