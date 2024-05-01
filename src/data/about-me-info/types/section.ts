import File from "./file.tsx";

export default interface Section {
    name: string;
    icon: string;
    files: File[];
}