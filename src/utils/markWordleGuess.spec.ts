import markwordleguess, { Mark } from "./markWordleGuess";

test("returns expected wordle mark", () => {
  expect(markwordleguess("WORLD", "WORDS")).toStrictEqual(["fullMatch", "fullMatch", "fullMatch", "miss", "partial"]),
  

  expect(markwordleguess("XXXXX", "WORDS")).toStrictEqual(["miss", "miss", "miss", "miss", "miss"]);

  const expectedResult: Mark[] = ["fullMatch", "fullMatch", "fullMatch", "fullMatch", "fullMatch"];
  expect(markwordleguess("WORDS", "WORDS")).toStrictEqual(expectedResult);
});

test("can handle double letters", () => {
  expect(markwordleguess("LULLS", "LEVEL")).toStrictEqual(["fullMatch", "miss", "partial", "miss", "miss"]);

  expect(markwordleguess("LLLLL", "LEVEL")).toStrictEqual(["fullMatch", "partial", "miss", "miss", "miss"]);

  expect(markwordleguess("APPLE", "PARTY")).toStrictEqual( ["partial", "partial", "miss", "miss", "miss"]);
});
