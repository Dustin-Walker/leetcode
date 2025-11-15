import increasingTriplet from "./IncreasingTripletSubsequence";

describe("IncreasingTripletSubsequence", () => {
  test("Case 1", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = true;
    expect(increasingTriplet(input)).toEqual(expectedOutput);
  });

  test("Case 2", () => {
    const input = [5, 4, 3, 2, 1];
    const expectedOutput = false;
    expect(increasingTriplet(input)).toEqual(expectedOutput);
  });

  test("Case 3", () => {
    const input = [2, 1, 5, 0, 4, 6];
    const expectedOutput = true;
    expect(increasingTriplet(input)).toEqual(expectedOutput);
  });

  test("Case 4", () => {
    const input = [20, 100, 10, 12, 5, 13];
    const expectedOutput = true;
    expect(increasingTriplet(input)).toEqual(expectedOutput);
  });
});
