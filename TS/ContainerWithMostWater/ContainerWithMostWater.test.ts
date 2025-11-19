import ContainerWithMostWater from "./ContainerWithMostWater";

describe(ContainerWithMostWater, () => {
  test("Case 1", () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = 49;
    expect(ContainerWithMostWater(input)).toEqual(output);
  });

  test("Case 2", () => {
    const input = [1, 1];
    const output = 1;
    expect(ContainerWithMostWater(input)).toEqual(output);
  });
});
