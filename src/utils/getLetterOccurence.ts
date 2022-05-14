export function getLetterOccurence(
  inputString: string,
  letterIndex: number
): number {
  const indexes: number[] = [];
  const searchLetter = inputString[letterIndex];
  const inputStringArray = inputString.split("");

  inputStringArray.forEach((letter, index) => {
    if (letter === searchLetter) {
      indexes.push(index);
    }
  });

  return indexes.findIndex((x) => x === letterIndex) + 1;
}

const answer = getLetterOccurence("LULLS", 4);

console.log(answer);

/**
 * function: getLetterOccurence
 *  inputs:
 *      - inputString (string) LULLS
 *      - letterIndex (number) 0
 *  return:
 *      - occurenceNumber (number) 1
 *
 *  split INPUTSTRING into its individual letters
 *  set LETTER to INPUTSTRING[INDEX]
 *  get the indexes where LETTER appears in INPUTSTRING
 *  set OCCURENCE to find the index of INDEXES where it equals LETTERINDEX
 *  return OCCURENCE + 1
 */
