import findMaxAverage from "./MaximumAverageSubarray";

describe(findMaxAverage, () => {
  test("Case 1", () => {
    const nums = [1, 12, -5, -6, 50, 3];
    const k = 4;
    const output = 12.75;
    expect(findMaxAverage(nums, k)).toEqual(output);
  });

  test("Case 2", () => {
    const nums = [5];
    const k = 1;
    const output = 5;
    expect(findMaxAverage(nums, k)).toEqual(output);
  });
});
