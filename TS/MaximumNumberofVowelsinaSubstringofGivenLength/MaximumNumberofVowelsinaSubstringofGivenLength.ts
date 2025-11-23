// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length

function maxVowels(s: string, k: number): number {
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  const difference = s.length - k;
  let maxNumberOfVowels = 0;
  for (let i = 0, localNumberOfVowels = 0; i <= difference; i++) {
    if (i === 0) {
      // set up the initial local sum only on the first iteration
      for (let j = 0; j < k; j++) {
        if (vowels.has(s.charAt(j))) {
          localNumberOfVowels += 1;
        }
        maxNumberOfVowels = localNumberOfVowels;
      }
    } else {
      if (vowels.has(s.charAt(i - 1))) {
        localNumberOfVowels -= 1;
      }
      if (vowels.has(s.charAt(i + k - 1))) {
        localNumberOfVowels += 1;
      }
      if (localNumberOfVowels > maxNumberOfVowels!) {
        maxNumberOfVowels = localNumberOfVowels;
      }
    }
  }
  return maxNumberOfVowels;
}

export default maxVowels;
