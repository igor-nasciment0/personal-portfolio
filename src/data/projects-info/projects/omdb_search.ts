import { Project, Tech } from "../types";

const ReactOMDB: Project = {
    name: "OMDB Search App",
    codeName: "react_omdb",
    description: "App que consome a API do OMDB (Open Movie DataBase) para pesquisar por filmes existentes no banco de dados deles, a partir do nome. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",
    coverImage: "omdb.png",
    siteURL: "https://react-omdb-search.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-filmes",
    techs: [
        Tech.REACT
    ]
}

export default ReactOMDB;