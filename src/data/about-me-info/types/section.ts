import File from "./file.tsx";

export default interface Section {
    name: {
        pt_br: string,
        en_us: string,
        [key: string]: string
    };
    icon: string;
    files: File[];
}