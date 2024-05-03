import { Project, Tech } from "../types";

const ReactPokemon: Project = {
    name: "Pokemón Search App",
    codeName: "react_pokemon",
    description: "App que usa a API do pokemón (https://pokeapi.co/) para encontrar os pokemón na ordem da pokedéx, de 20 em 20. \n Também é possível filtrar os pokemón já encontrados. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",
    coverImage: "pokemon.png",
    siteURL: "https://react-search-pokemon.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-pokemon",
    techs: [
        Tech.REACT
    ]
}

export default ReactPokemon;