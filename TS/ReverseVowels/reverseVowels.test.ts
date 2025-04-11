import reverseVowels from "./reverseVowels";

describe("ReverseVowels", () => {
  test("case 1", () => {
    expect(reverseVowels("IceCreAm")).toEqual("AceCreIm");
  });

  test("case 2", () => {
    expect(reverseVowels("leetcode")).toEqual("leotcede");
  });
});
