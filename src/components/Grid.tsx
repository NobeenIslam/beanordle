import { useState } from "react";
import { replaceOneElementOfArray } from "../utils/replaceOneElementOfArray";
import { Guess } from "./Guess";

export function Grid(): JSX.Element {
  const [guessArray, setGuess] = useState<string[]>(["", "", "", "", ""]);
  const [guessCounter, setGuessCounter] = useState<number>(1);
  console.log(`Now on guess ${guessCounter}`);

  function onEnterPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter") {
      console.log(`Enter key was pressed`);
      setGuessCounter(guessCounter + 1);
    }
  }

  console.log(guessCounter, guessArray);
  return (
    <section>
      <input
        placeholder="Put your guess here"
        value={guessArray[guessCounter - 1]}
        onChange={(e) =>
          setGuess((prevGuessArray) =>
            replaceOneElementOfArray(
              prevGuessArray,
              guessCounter - 1,
              e.target.value
            )
          )
        }
        // For the guess we are on update only that element of GuessArray using the input value
        maxLength={5}
        onKeyDown={(e) => onEnterPress(e)}
      ></input>
      <Guess guess={guessArray[0]} />
      <Guess guess={guessArray[1]} />
      <Guess guess={guessArray[2]} />
      <Guess guess={guessArray[3]} />
      <Guess guess={guessArray[4]} />
    </section>
  );
}

/*
as the user inputs his first guess
populate each element of the grid's first row with the letters
when he submits the guess with an enter press 
    clear the input bar, but don't clear the first row.
    input should now modifify for the second fuess

function
    for the guess number that we are on
    set assign even.target.value to that index of the array


*/
