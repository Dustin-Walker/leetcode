import longestPalindromeSubstring from "./longestPalindromeSubstring";

describe('longestPalindromeSubstring', () => {
    test('case 1', () => {
        expect(longestPalindromeSubstring('babad')).toMatch(/bab|aba/)
    })
    test('case 2', () => {
        expect(longestPalindromeSubstring('cbbd')).toEqual('bb')
    })
    test('case 3', () => {
        expect(longestPalindromeSubstring('abb')).toEqual('bb')
    })
    test('case 4', () => {
        expect(longestPalindromeSubstring('caba')).toEqual('aba');
    })
})