import { markWordleGuess, Mark } from "./markWordleGuess";

test("returns expected wordle mark", () => {
  expect(markWordleGuess("WORLD", "WORDS")).toStrictEqual([
    "fullMatch",
    "fullMatch",
    "fullMatch",
    "miss",
    "partial",
  ]),
    expect(markWordleGuess("XXXXX", "WORDS")).toStrictEqual([
      "miss",
      "miss",
      "miss",
      "miss",
      "miss",
    ]);

  const expectedResult: Mark[] = [
    "fullMatch",
    "fullMatch",
    "fullMatch",
    "fullMatch",
    "fullMatch",
  ];
  expect(markWordleGuess("WORDS", "WORDS")).toStrictEqual(expectedResult);
});

test("can handle double letters", () => {
  expect(markWordleGuess("LULLS", "LEVEL")).toStrictEqual([
    "fullMatch",
    "miss",
    "partial",
    "miss",
    "miss",
  ]);

  expect(markWordleGuess("LLLLL", "LEVEL")).toStrictEqual([
    "fullMatch",
    "partial",
    "miss",
    "miss",
    "miss",
  ]);

  expect(markWordleGuess("APPLE", "PARTY")).toStrictEqual([
    "partial",
    "partial",
    "miss",
    "miss",
    "miss",
  ]);
});
