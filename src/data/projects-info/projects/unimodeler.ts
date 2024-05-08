import { Project, Tech } from "../types";

const UniModelerProject: Project = {
    name: "UniModeler",
    codeName: "uni_modeler",
    description: {
        pt_br: "UniModeler é um modelador de banco de dados, focado em modelagens para MongoDb. \n Nele, cada Collection é definida no editor de texto como um objeto em JavaScript. As propriedades desse objeto serão consideradas as propriedades do Document que esta Collection receberá. Pelo editor de texto, é possível adicionar sub-Documents, criar referências entre Collections ao definir chaves primária e estrangeira etc. \n Para desenvolver esta aplicação, empreguei conhecimentos adquiridos em AST (para ler as collections definidas no editor de texto) e na biblioteca ReactFlow (para criar o layout visual das collections).",
        
        en_us: "UniModeler is a database modeler, focused on modeling for MongoDB. \n In it, each Collection is defined in the text editor as a JavaScript object. The properties of this object will be considered as the properties of the Document that this Collection will receive. Through the text editor, it is possible to add sub-documents, create references between Collections by defining primary and foreign keys, etc. \n To develop this application, I employed knowledge acquired in AST (to read the collections defined in the text editor) and in the ReactFlow library (to create the visual layout of the collections)."
    },
    coverImage: "unimodeler.png",
    techs: [
        Tech.REACT,
        Tech.MONGODB,
        Tech.EXPRESS
    ]
}

export default UniModelerProject;