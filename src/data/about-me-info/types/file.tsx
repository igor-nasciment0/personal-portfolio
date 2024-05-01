export default class File {

    public name: string;
    public content: () => JSX.Element;

    constructor(name: string, content: () => JSX.Element) {
        this.name = name;
        this.content = content;
    }
}