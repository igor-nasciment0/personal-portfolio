export function separateInParagraphs(string: string) {
    let paragraphs: string[] = [];
    let currentParagraph: string = "";

    for (let char of string) {
        if (char === '\n') {
            paragraphs.push(currentParagraph);
            currentParagraph = "";
        }
        else currentParagraph += char;
    }

    paragraphs.push(currentParagraph);
    return paragraphs;
}

export function limitText(text: string) {
    let newText = text;

    if (text.length > 50) {
        const lastWordIndex = newText.slice(50).search(/[.\s]/) + 50;
        newText = newText.slice(0, lastWordIndex).trim() + "...";
    }

    return newText;
}

export function formatUrl(url: string) {
    var doubleSlash = url.split('//');

    var formatted = doubleSlash.map(str =>
        str.replace(/(?<after>:)/giu, '$1<wbr>')
            .replace(/(?<before>[/~.,\-_?#%])/giu, '<wbr>$1')
            .replace(/(?<beforeAndAfter>[=&])/giu, '<wbr>$1<wbr>')
    ).join('//<wbr>');

    return formatted;
}