import { Project, Tech } from "../types";

const ReactMarvel: Project = {
    name: "Marvel Search App",
    codeName: "react_marvel",
    description: {
        pt_br: "App que consome a API da Marvel (https://developer.marvel.com/) para possibilitar a pesquisa de personagens a partir do nome. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",
        
        en_us: "App that consumes Marvel's API (https://developer.marvel.com/) in order to possibilite the search for characters based on their names. \n One of the first projects I did in order to practice development using React."
    },
    coverImage: "marvel.png",
    siteURL: "https://react-marvel-search.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-marvel",
    techs: [
        Tech.REACT
    ]
}

export default ReactMarvel;