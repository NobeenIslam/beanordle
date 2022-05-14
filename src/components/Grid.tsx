import { useState } from "react";
import { Guess } from "./Guess";

export function Grid(): JSX.Element {
  const [guess, setGuess] = useState<string>("");
  console.log(guess);
  return (
    <section>
      <input
        placeholder="Put your guess here"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        className="guessBar"
      ></input>
      `
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
      <Guess guess={guess} />
    </section>
  );
}
