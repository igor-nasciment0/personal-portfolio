import { Project, Tech } from "../types";

const ReactNetwork: Project = {
    name: "Social Network App",
    codeName: "react_social_network",
    description: "O objetivo do app é simular o ato de postar algo numa rede social, como o Instagram. \n Ele não consome nenhuma API ou banco de dados, então as postagens desaparecem quando você recarrega a página. Contudo, é uma demonstração razoável do que acontece, no código em React, quando se posta algo numa rede social. \n Um dos primeiros projetos que eu fiz a fim de praticar o desenvolvimento em React.",
    coverImage: "socialNetwork.png",
    siteURL: "https://react-socialnetwork-app.netlify.app/",
    repositoryURL: "https://github.com/igor-nasciment0/react-instagram",
    techs: [
        Tech.REACT
    ]
}

export default ReactNetwork;