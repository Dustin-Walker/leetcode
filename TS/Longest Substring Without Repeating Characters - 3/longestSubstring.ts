// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
    let substring: string[] = [];
    let greatestLength: number = 0;
    let index = 0;
    for (let char of s) {
        let characterIndex = substring.indexOf(char);
        if (characterIndex !== undefined) {
            // Character already exists
            substring = substring.slice(characterIndex + 1)
        }
        substring.push(char);
        if (substring.length > greatestLength) {
            greatestLength = substring.length;
        }
        index += 1;
    }

    return greatestLength;
}

export default lengthOfLongestSubstring;