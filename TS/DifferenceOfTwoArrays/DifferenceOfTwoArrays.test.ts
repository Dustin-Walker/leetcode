import findDifference from "./DifferenceOfTwoArrays";

describe("GreatestCommonDivisorOfStrings", () => {
  test("case 1", () => {
    const n1 = [1, 2, 3];
    const n2 = [2, 4, 6];
    const output = [
      [1, 3],
      [4, 6],
    ];
    expect(findDifference(n1, n2)).toStrictEqual(output);
  });
  test("case 2", () => {
    const n1 = [1, 2, 3, 3];
    const n2 = [1, 1, 2, 2];
    const output = [[3], []];
    expect(findDifference(n1, n2)).toStrictEqual(output);
  });
});
