import lengthOfLongestSubstring from "./longestSubstring";

describe('Longest Substring Without Repeating Characters', () => {
    test('case 1', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    });
    test('case 2', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    });
    test('case 3', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    });
    test('case 4', () => {
        expect(lengthOfLongestSubstring("aab")).toEqual(2);
    });
    test('case 5', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    });
    test('case 6', () => {
        expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
    });
    test('case 7', () => {
        expect(lengthOfLongestSubstring("tmmzuxt")).toEqual(5);
    });
})