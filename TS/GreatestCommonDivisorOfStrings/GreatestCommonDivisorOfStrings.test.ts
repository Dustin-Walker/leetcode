import gcdOfStrings from "./GreatestCommonDivisorOfStrings";

describe("GreatestCommonDivisorOfStrings", () => {
  test("case 1", () => {
    const str1 = "ABCABC";
    const str2 = "ABC";
    const output = "ABC";
    expect(gcdOfStrings(str1, str2)).toBe(output);
  });
  test("case 2", () => {
    const str1 = "ABABAB";
    const str2 = "ABAB";
    const output = "AB";
    expect(gcdOfStrings(str1, str2)).toBe(output);
  });
  test("case 3", () => {
    const str1 = "LEFT";
    const str2 = "CODE";
    const output = "";
    expect(gcdOfStrings(str1, str2)).toBe(output);
  });
});
