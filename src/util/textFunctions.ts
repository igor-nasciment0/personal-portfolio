export function separateInParagraphs(string: string) {
    let paragraphs: string[] = [];
    let currentParagraph: string = "";

    for(let char of string) {
        if(char === '\n') {
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
    
    if(text.length > 50) {
        const lastWordIndex = newText.slice(50).search(/[.\s]/) + 50;
        newText = newText.slice(0, lastWordIndex).trim() + "...";
    }

    return newText;
}