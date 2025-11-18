// https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
  if (s === "") {
    return true;
  }
  let iS = 0;
  const tLen = t.length;
  const sLen = s.length;
  for (let iT = 0; iT < tLen; iT++) {
    if (t[iT] === s[iS]) {
      iS++;
      if (iS === sLen) {
        return true;
      }
    }
  }
  return false;
}

export default isSubsequence;
