import moveZeroes from "./MoveZeroes";

describe("MoveZeroes", () => {
  test("Case 1", () => {
    const input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    const output = [1, 3, 12, 0, 0];
    expect(input).toEqual(output);
  });

  test("Case 2", () => {
    const input = [0];
    moveZeroes(input);
    const output = [0];
    expect(input).toEqual(output);
  });
});
