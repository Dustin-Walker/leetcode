import maxVowels from "./MaximumNumberofVowelsinaSubstringofGivenLength";

describe(maxVowels, () => {
  test("Case 1", () => {
    const s = "abciiidef";
    const k = 3;
    const output = 3;
    expect(maxVowels(s, k)).toEqual(output);
  });

  test("Case 2", () => {
    const s = "aeiou";
    const k = 2;
    const output = 2;
    expect(maxVowels(s, k)).toEqual(output);
  });

  test("Case 3", () => {
    const s = "leetcode";
    const k = 3;
    const output = 2;
    expect(maxVowels(s, k)).toEqual(output);
  });
});
