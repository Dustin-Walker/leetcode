import MaxNumberOfKSumPairs from "./MaxNumberOfKSumPairs";

describe(MaxNumberOfKSumPairs, () => {
  test("Case 1", () => {
    const nums = [1, 2, 3, 4];
    const k = 5;
    const output = 2;
    expect(MaxNumberOfKSumPairs(nums, k)).toEqual(output);
  });

  test("Case 2", () => {
    const nums = [3, 1, 3, 4, 3];
    const k = 6;
    const output = 1;
    expect(MaxNumberOfKSumPairs(nums, k)).toEqual(output);
  });

  test("Case 3", () => {
    const nums = [3, 5, 1, 5];
    const k = 2;
    const output = 0;
    expect(MaxNumberOfKSumPairs(nums, k)).toEqual(output);
  });

  test("Case 4", () => {
    const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
    const k = 2;
    const output = 2;
    expect(MaxNumberOfKSumPairs(nums, k)).toEqual(output);
  });
});
