import { useState } from "react";
import { Guess } from "./Guess";

export function Grid(): JSX.Element {
  const [guess, setGuess] = useState<string>("")
  const [guessCounter, setGuessCounter] = useState<number>(1);

    function onEnterPress(event:React.KeyboardEvent<HTMLInputElement>){
        if (event.code === "Enter") {
          console.log("Enter key was pressed. Run your function.");
          setGuess("")
          setGuessCounter(guessCounter+1)
        }
    }

  console.log(guessCounter);
  return (
    <section>
      <input
        placeholder="Put your guess here"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        onKeyDown={(e)=> onEnterPress(e)}
      ></input>
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
    </section>
  );
}
