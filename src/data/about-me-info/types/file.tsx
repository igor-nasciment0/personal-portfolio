export default class File {

    public name: {
        pt_br: string,
        en_us: string,
        [key: string]: string
    };

    public content: () => JSX.Element;

    constructor(name_pt: string, name_us: string, content: () => JSX.Element) {
        this.name = {
            pt_br: name_pt,
            en_us: name_us
        };
        this.content = content;
    }
}