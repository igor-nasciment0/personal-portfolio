import File from "./file";

export default interface Section {
    name: string;
    icon: string;
    files: File[];
}