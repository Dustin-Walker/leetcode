import rangeAddQueries from "./IncrementSubmatrices";

describe("IncrementSubmatrices", () => {
  test("case 1", () => {
    expect(
      rangeAddQueries(3, [
        [1, 1, 2, 2],
        [0, 0, 1, 1],
      ]),
    ).toStrictEqual([
      [1, 1, 0],
      [1, 2, 1],
      [0, 1, 1],
    ]);
  });

  test("case 2", () => {
    expect(rangeAddQueries(2, [[0, 0, 1, 1]])).toStrictEqual([
      [1, 1],
      [1, 1],
    ]);
  });
});
