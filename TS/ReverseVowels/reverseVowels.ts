function reverseVowels(s: string): string {
  const vowelIndexes: number[] = [];
  const sArr: string[] = s.split("");
  Array.from(s).forEach((vowel, index) => {
    if ("aeiouAEIOU".includes(vowel)) {
      vowelIndexes.push(index);
    }
  });
  for (let tmp = "", i = 0; i < Math.floor(vowelIndexes.length / 2); i++) {
    // Swap vowels
    const leftVowelIndex = vowelIndexes[i];
    const rightVowelIndex = vowelIndexes[vowelIndexes.length - 1 - i];
    const leftVowel = sArr[leftVowelIndex];
    sArr[leftVowelIndex] = sArr[rightVowelIndex];
    sArr[rightVowelIndex] = leftVowel;
  }
  return sArr.join("");
}

export default reverseVowels;
