// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

/**
 * Given an array of characters chars, compress it using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 *
 * After you are done modifying the input array, return the new length of the array.
 *
 * You must write an algorithm that uses only constant extra space.
 *
 * Note: The characters in the array beyond the returned length do not matter and should be ignored.
 *
 * Note 2: Leetcode ultimately did not accept this answer because the problem calls out modifying the input array in-place.
 * I don't really see the benefit to modifying the array in-place unless the use-case is really trying to minimize the space complexity
 * and in that case, TypeScript probably isn't the write tool for the job. C would be more appropriate and perhaps this approach would be
 * a better fit for a device with very little available memory such as an embedded device. So for an answer that uses TypeScript, I think this
 * approach is acceptable, and we could just increase the memory size of the container running this process or refactor the code if memory usage became an issue.
 * @param chars
 */
function compress(chars: string[]): string[] {
  let arr = [];
  let previousChar = "";
  let currentCharCount = 1;
  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    if (i === chars.length - 1) {
      currentChar === previousChar
        ? currentCharCount++
        : (currentCharCount = 1);
      currentCharCount > 1
        ? arr.push(previousChar, currentCharCount)
        : arr.push(currentChar);
      break;
    }
    if (i === 0) {
      previousChar = currentChar;
      continue;
    }
    if (currentChar === previousChar) {
      currentCharCount += 1;
    } else {
      currentCharCount > 1
        ? arr.push(previousChar, currentCharCount)
        : arr.push(previousChar);
      currentCharCount = 1;
      previousChar = currentChar;
    }
  }
  arr = arr.flatMap((value: string | number) => value.toString().split(""));
  return arr;
}

export default compress;
