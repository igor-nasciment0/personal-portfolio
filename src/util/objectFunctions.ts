import { Tech } from "../data/projects-info/types";

export function getClassProperties(techClass: any): Tech[] {
    let properties: Tech[] = [];

    for(const property in techClass)
        properties.push(techClass[property]);    

    return properties;
}