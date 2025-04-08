// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Find the greatest common denominator of 2 numbers
 * Uses the Euclidean algorithm approach
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 * @param n1
 * @param n2
 */
function gcd(n1: number, n2: number): number {
  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}

function gcdOfStrings(str1: string, str2: string): string {
  const n1 = str1.length;
  const n2 = str2.length;
  const gcdOfInputs = gcd(n1, n2);
  // Iterate over integers
  // starting with the greatest common denominator of the two inputs
  // going down by 1 every iteration
  for (
    let i = gcdOfInputs, n1Repeats = true, n2Repeats = true;
    i >= 1;
    i -= 1, n1Repeats = true, n2Repeats = true
  ) {
    if (n1 % i === 0 && n2 % i === 0) {
      const repeatingString = str1.slice(0, i);
      // Check to see if n1 contains repeating string
      for (let j = 0; j < n1; j += i) {
        if (str1.slice(j, j + i) !== repeatingString) {
          n1Repeats = false;
          break;
        }
      }
      if (!n1Repeats) {
        break;
      }
      // Check to see if n2 contains repeating string
      for (let k = 0; k < n2; k += i) {
        if (str2.slice(k, k + i) !== repeatingString) {
          n2Repeats = false;
          break;
        }
      }
      if (n2Repeats) {
        return repeatingString;
      }
    }
  }
  return "";
}

export default gcdOfStrings;
