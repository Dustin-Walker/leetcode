import isSubsequence from "./IsSubsequence";

describe("isSubsequence", () => {
  test("Case 1", () => {
    const s = "abc";
    const t = "ahbgdc";
    expect(isSubsequence(s, t)).toBe(true);
  });
  test("Case 2", () => {
    const s = "axc";
    const t = "ahbgdc";
    expect(isSubsequence(s, t)).toBe(false);
  });
  test("Case 2", () => {
    const s = "";
    const t = "ahbgdc";
    expect(isSubsequence(s, t)).toBe(true);
  });
});
