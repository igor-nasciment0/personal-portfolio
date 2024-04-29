import { Tech } from "../data/projects-info/projects/projectInterface";

export function getClassProperties(techClass: any): Tech[] {
    let properties: Tech[] = [];

    for(const property in techClass)
        properties.push(techClass[property]);    

    return properties;
}