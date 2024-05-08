import { Project, Tech } from "../types";

const ReactPokemon: Project = {
    name: "Pokémon Search App",
    codeName: "react_pokemon",
    description: {
        pt_br: "App que usa a API do pokémon (https://pokeapi.co/) para encontrar os pokémon na ordem da pokédex, de 20 em 20. \n Também é possível filtrar pelo nome os pokémon já encontrados. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",

        en_us : "App that uses the pokémon API (https://pokeapi.co/) to find the pokémon in the pokédex order, in groups of 20. \n It is also possible to filter by name the pokémon already found. \n One of the first projects I did in order to practice development using React."
    },
    coverImage: "pokemon.png",
    siteURL: "https://react-search-pokemon.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-pokemon",
    techs: [
        Tech.REACT
    ]
}

export default ReactPokemon;