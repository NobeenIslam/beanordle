export function getLetterOccurence(inputString: string, letterIndex: number): number {
    const indexes: number[] = [];
    const searchLetter = inputString[letterIndex];
    const inputStringArray = inputString.split("");

    inputStringArray.forEach((letter, index) => {
        if (letter === searchLetter) {
            indexes.push(index);
        }
    })

    return indexes.findIndex(x => x === letterIndex) + 1


}

const answer = getLetterOccurence("LULLS",4);

console.log(answer);