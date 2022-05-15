import { GuessRow } from "./GuessRow";
import { markWordleGuess, Mark } from "../utils/markWordleGuess";
import { MarkedGuessRow } from "./MarkedGuessRow";
import { useState } from "react";

export function Grid(): JSX.Element {
  const [guesses, setGuesses] = useState<string[]>(["", "", "", "", ""]);
  const [guessCounter, setGuessCounter] = useState<number>(1);
  const [markedResults, setMarkedResults] = useState<Mark[][]>([]);
  const [haveGuessesSubmitted, setHaveGuessesSubmitted] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const wordOfTheDay = "LEVEL";

  function onEnterPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter") {
      setHaveGuessesSubmitted((currentHaveGuessesSubmitted) => {
        currentHaveGuessesSubmitted[guessCounter - 1] = true;
        const newHaveGuessesSubmitted = [...currentHaveGuessesSubmitted];
        return newHaveGuessesSubmitted;
      });
      setGuessCounter((currentGuessCounter) => currentGuessCounter + 1);
      const currentMarkedResult = markWordleGuess(
        guesses[guessCounter - 1],
        wordOfTheDay
      );
      setMarkedResults((currentMarkedResults) => [
        ...currentMarkedResults,
        currentMarkedResult,
      ]);
    }
  }

  return (
    <section className="gridSection">
      <input
        className="guessInput"
        placeholder="Put your guess here"
        value={guesses[guessCounter - 1]}
        onChange={(e) =>
          setGuesses((prevGuessArray) => {
            prevGuessArray[guessCounter - 1] = e.target.value.toUpperCase();
            const newGuessArray = [...prevGuessArray];
            return newGuessArray;
          })
        }
        // For the guess we are on update only that element of GuessArray using the input value
        maxLength={5}
        onKeyDown={(e) => onEnterPress(e)}
      ></input>
      {haveGuessesSubmitted[0] ? (
        <MarkedGuessRow guess={guesses[0]} markedResult={markedResults[0]} />
      ) : (
        <GuessRow guess={guesses[0]} />
      )}
      {haveGuessesSubmitted[1] ? (
        <MarkedGuessRow guess={guesses[1]} markedResult={markedResults[1]} />
      ) : (
        <GuessRow guess={guesses[1]} />
      )}
      {haveGuessesSubmitted[2] ? (
        <MarkedGuessRow guess={guesses[2]} markedResult={markedResults[2]} />
      ) : (
        <GuessRow guess={guesses[2]} />
      )}
      {haveGuessesSubmitted[3] ? (
        <MarkedGuessRow guess={guesses[3]} markedResult={markedResults[3]} />
      ) : (
        <GuessRow guess={guesses[3]} />
      )}
      {haveGuessesSubmitted[4] ? (
        <MarkedGuessRow guess={guesses[4]} markedResult={markedResults[4]} />
      ) : (
        <GuessRow guess={guesses[4]} />
      )}
    </section>
  );
}

/*
as the user inputs his first guess
populate each element of the grid's first row with the letters
when he submits the guess with an enter press 
    clear the input bar, but don't clear the first row.
    input should now modifify for the second fuess

//HOW TO GET DIFFERENT GUESSES SHOWING UP AFTER SUBMIT
    for the guess number that we are on
    set assign even.target.value to that index of the array


///HOW to get algorithm to colour
for each guess made by the user
    after submit of the guess with the enter
    toggle a marking boolean
    markWordleGuess and pass it into the relvant guess
    Use result to colour frames using
*/
