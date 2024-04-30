export default class File {

    public name: string;
    public content: string;

    constructor(name: string, content: string) {
        this.name = name;
        this.content = content.trim();
    }
}