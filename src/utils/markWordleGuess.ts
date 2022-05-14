import { getLetterOccurence } from "./getLetterOccurence";



export type Mark = "miss" | "partial" | "fullMatch";

export function markWordleGuess(
  guess: string,
  hiddenTarget: string
): Mark[] {
  const result: Mark[] = ["miss", "miss", "miss", "miss", "miss"];

  for (let index = 0; index < guess.length; index++) {
    const letter = guess[index];
    const occurencesInTarget: number = hiddenTarget
      .split("")
      .filter((x) => x === letter).length;
    const guessOccurenceNumber: number = getLetterOccurence(guess, index);

    if (guessOccurenceNumber <= occurencesInTarget) {
      if (letter === hiddenTarget[index]) {
        result[index] = "fullMatch";
      } else {
        result[index] = "partial";
      }
    }
  }

 
  return result;
}

/**
 * PSEUDOCODE
 * function: markWordleGuess
 *  inputs:
 *  - guess (string)
 *  - hiddenTarget (string)
 *  return:
 *  - markedGuess
 *  set result = [0,0,0,0,0]
 *
 *  for each LETTER, INDEX in GUESS
 *      set LETTEROCCURENCESINHIDDENTARGET to the number of times the letter appears in HIDDENTARGET
 *      set NUMBEROFOCCURENCEINGUESS to the number of occurence in GUESS
 *      if NUMBEROFOCCURENCEINGUESS <= LETTEROCCURENCESINTARGET
 *          if LETTER = HIDDENTARGET[INDEX]
 *              set RESULT[INDEX] to 2
 *          else
 *              set RESULT[INDEX] to 1
 *          endif
 *      endif
 *  endfor
 *
 *  set MARKEDGUESS to an object containing the guess and the result array
 *  return MARKEDGUESS
 *
 *  *
 *
 *
 */
