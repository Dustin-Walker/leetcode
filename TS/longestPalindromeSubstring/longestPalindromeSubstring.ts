// https://leetcode.com/problems/longest-palindromic-substring/description/

function recursivelyFindPalindrome(stringArray: string[], expandingWindowLeftIndex: number, expandingWindowRightIndex: number): string {
    const isPalindrome = stringArray[expandingWindowLeftIndex] === stringArray[expandingWindowRightIndex];

    if (isPalindrome && (expandingWindowRightIndex === stringArray.length - 1 || expandingWindowLeftIndex === 0)) {
        // Sides of window reach the end of the array
        return stringArray.slice(expandingWindowLeftIndex, expandingWindowRightIndex + 1).join('');
    }


    if (isPalindrome) {
        // Expand the window and try again
        return recursivelyFindPalindrome(stringArray, expandingWindowLeftIndex - 1, expandingWindowRightIndex + 1);
    } else {
        // Shrink the window to the last valid palindrome
        return stringArray.slice(expandingWindowLeftIndex + 1, expandingWindowRightIndex).join('');
    }
}

/**
 * This approach iterates over every character and uses an expanding window to continually check for palindromes.
 * @param s
 */
function longestPalindrome(s: string): string {

    if (s.length === 1) {
        return s;
    }

    const stringArray: string[] = s.split('');
    let longestPalindrome = s.charAt(0);

    for (let loopIterationIndex = 1, expandingWindowLeftIndex = 0, expandingWindowRightIndex = 1; expandingWindowRightIndex < stringArray.length; loopIterationIndex += 1, expandingWindowLeftIndex = loopIterationIndex - 1, expandingWindowRightIndex = loopIterationIndex) {
        if (stringArray[expandingWindowLeftIndex] === stringArray[expandingWindowRightIndex + 1]) {
            // Central axis case
            const palindrome = recursivelyFindPalindrome(stringArray, expandingWindowLeftIndex, expandingWindowRightIndex + 1);
            if (palindrome.length > longestPalindrome.length) {
                longestPalindrome = palindrome;
            }
        }

        if (stringArray[expandingWindowLeftIndex] === stringArray[expandingWindowRightIndex]) {
            // No central axis case
            const palindrome = recursivelyFindPalindrome(stringArray, expandingWindowLeftIndex, expandingWindowRightIndex);
            if (palindrome.length > longestPalindrome.length) {
                longestPalindrome = palindrome;
            }
        }
    }

    return longestPalindrome;
};

export default longestPalindrome;