import File from "../data/about-me-info/types/file";

export default class FileHistory {

    private history: File[];

    constructor() {
        this.history = [];
    }

    public addToHistory(file: File) {
        this.history.push(file);
    }

    public popFromHistory() {
        return this.history.pop();
    }

    public getLastFile() {
        return this.history[this.history.length - 1];
    }

    public removeFromHistory(file: File) {
        this.history = this.history.filter(historyFile => historyFile.name !== file.name);
    }
}