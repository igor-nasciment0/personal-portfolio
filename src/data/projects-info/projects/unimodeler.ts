import { Project, Tech } from "../types";

const UniModelerProject: Project = {
    name: "UniModeler",
    codeName: "uni_modeler",
    description: "UniModeler é um modelador de banco de dados, focado em modelagens para MongoDb. \n Nele, cada Collection é definida no editor de texto como um objeto em JavaScript. As propriedades desse objeto serão consideradas as propriedades do Document que esta Collection receberá. Pelo editor de texto, é possível adicionar sub-Documents, criar referências entre Collections ao definir chaves primária e estrangeira etc. \n Para desenvolver esta aplicação, empreguei conhecimentos adquiridos em AST (para ler as collections definidas no editor de texto) e na biblioteca ReactFlow (para criar o layout visual das collections).",
    coverImage: "unimodeler.png",
    techs: [
        Tech.REACT,
        Tech.MONGODB,
        Tech.EXPRESS
    ]
}

export default UniModelerProject;