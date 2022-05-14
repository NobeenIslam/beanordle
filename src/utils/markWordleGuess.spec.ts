import markwordleguess, { Mark } from "./markWordleGuess";
import { MarkedGuess } from "./markWordleGuess";

test("returns expected wordle mark", () => {
  expect(markwordleguess("WORLD", "WORDS")).toStrictEqual({
    guess: "WORLD",
    result: ["fullMatch", "fullMatch", "fullMatch", "miss", "partial"],
  } as MarkedGuess);

  expect(markwordleguess("XXXXX", "WORDS")).toStrictEqual({
    guess: "XXXXX",
    result: ["miss", "miss", "miss", "miss", "miss"],
  } as MarkedGuess);

  const expectedResult: Mark[] = ["fullMatch", "fullMatch", "fullMatch", "fullMatch", "fullMatch"];
  expect(markwordleguess("WORDS", "WORDS")).toStrictEqual({
    guess: "WORDS",
    result: expectedResult,
  } as MarkedGuess);
});

test("can handle double letters", () => {
  expect(markwordleguess("LULLS", "LEVEL")).toStrictEqual({
    guess: "LULLS",
    result: ["fullMatch", "miss", "partial", "miss", "miss"],
  } as MarkedGuess);

  expect(markwordleguess("LLLLL", "LEVEL")).toStrictEqual({
    guess: "LLLLL",
    result: ["fullMatch", "partial", "miss", "miss", "miss"],
  } as MarkedGuess);

  expect(markwordleguess("APPLE", "PARTY")).toStrictEqual({
    guess: "APPLE",
    result: ["partial", "partial", "miss", "miss", "miss"],
  } as MarkedGuess);
});
