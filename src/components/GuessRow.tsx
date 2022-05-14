
interface GuessRowProps {
  guess: string;
  
}
export function GuessRow({ guess}: GuessRowProps): JSX.Element {
  return (
    <>
      <div className="grid-container">
        <div>
          <span>{guess[0]}</span>
        </div>
        <div>
          <span>{guess[1]}</span>
        </div>
        <div>
          <span>{guess[2]}</span>
        </div>
        <div>
          <span>{guess[3]}</span>
        </div>
        <div>
          <span>{guess[4]}</span>
        </div>
        {/* Didn't map because the blocks don't show until guess has more than one character. Like this it shows empty block */}
      </div>
    </>
  );
}

/*
set guess to be an array where each letter is an element of the guess
set the value of each grid container to be corresponding element of array
onChange of kepress, set new value of the grid

set guess = userInput guess.
for each letter of guess
    presnt it in a grid element
*/
