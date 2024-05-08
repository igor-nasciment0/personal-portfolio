import { Project, Tech } from "../types";

const ReactOMDB: Project = {
    name: "OMDB Search App",
    codeName: "react_omdb",
    description: {
        pt_br: "App que consome a API do OMDB (Open Movie DataBase) para pesquisar por filmes existentes no banco de dados deles, a partir do nome. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",

        en_us: "App that consumes the OMDB (Open Movie DataBase) API to search for movies in their database, based on the name. \n One of the first projects I did in order to practice development using React."
    },
    coverImage: "omdb.png",
    siteURL: "https://react-omdb-search.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-filmes",
    techs: [
        Tech.REACT
    ]
}

export default ReactOMDB;