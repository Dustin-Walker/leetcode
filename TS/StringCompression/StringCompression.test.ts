import compress from "./StringCompression";

describe("StringCompression", () => {
  test("Case 1", () => {
    const input = ["a", "a", "b", "b", "c", "c", "c"];
    const output = ["a", "2", "b", "2", "c", "3"];
    expect(compress(input)).toEqual(output);
  });

  test("Case 2", () => {
    const input = ["a"];
    const output = ["a"];
    expect(compress(input)).toEqual(output);
  });

  test("Case 3", () => {
    const input = [
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ];
    const output = ["a", "b", "1", "2"];
    expect(compress(input)).toEqual(output);
  });
});
