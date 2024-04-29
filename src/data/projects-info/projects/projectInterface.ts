export default interface Project {
    name: string,
    codeName: string,
    description: string,
    coverImage: string
    techs: Tech[],
    siteURL?: string,
    repositoryURL?: string 
}

export class Tech { 
    static readonly REACT = new Tech("React", "react.svg", "#317F94");
    static readonly EXPRESS = new Tech("Express.js", "express.svg", "#90C640");
    static readonly MONGODB = new Tech("MongoDB", "mongodb.svg", "#439945");

    public readonly name: string;
    public readonly logoURL: string;
    public readonly color: string;

    private constructor(name: string, logoURL: string, color: string) {
        this.name = name;
        this.logoURL = "/assets/images/techs/" + logoURL;
        this.color = color;
    }
}