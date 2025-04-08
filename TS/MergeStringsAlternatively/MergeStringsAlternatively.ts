// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

function mergeAlternately(word1: string, word2: string): string {
  const shorterInputLength = Math.min(word1.length, word2.length);
  let mergedStringArray = [];
  const word1Array = word1.split("");
  const word2Array = word2.split("");
  for (let i = 0; i < shorterInputLength; i++) {
    mergedStringArray.push(word1Array[i]);
    mergedStringArray.push(word2Array[i]);
  }

  if (word1.length === shorterInputLength) {
    mergedStringArray.push(...word2Array.slice(shorterInputLength));
  } else {
    // word2.length === shortInputLength
    mergedStringArray.push(...word1Array.slice(shorterInputLength));
  }

  return mergedStringArray.join("");
}

export default mergeAlternately;
