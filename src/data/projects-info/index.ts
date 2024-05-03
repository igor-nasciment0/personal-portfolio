import ReactMarvel from "./projects/marvel_search";
import ReactOMDB from "./projects/omdb_search";
import ReactPokemon from "./projects/pokemon_search";
import ReactInstagram from "./projects/react_socialNetwork";
import UniModelerProject from "./projects/unimodeler";
import { Project } from "./types";

const projects: Project[] = [
    UniModelerProject,
    ReactPokemon,
    ReactMarvel,
    ReactOMDB,
    ReactInstagram
]

export default projects;