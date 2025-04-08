import mergeAlternately from "./MergeStringsAlternatively";

describe("mergedStrings", () => {
  test("case 1", () => {
    const word1 = "abc";
    const word2 = "pqr";
    const expectedOutput = "apbqcr";
    expect(mergeAlternately(word1, word2)).toEqual(expectedOutput);
  });
  test("case 2", () => {
    const word1 = "ab";
    const word2 = "pqrs";
    const expectedOutput = "apbqrs";
    expect(mergeAlternately(word1, word2)).toEqual(expectedOutput);
  });
});
