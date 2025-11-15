// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * Solution explanation:
 * Iterate over the array and continually find the smallest number. If a number smaller than the current minimum is found, make that value the new minimum.
 * Once the minimum number is found, look for a higher number (the middle number).
 * Once the middle number is found, look for an even higher number.
 * If all three values are found, return true. A set of 3 increasing values exist in the array.
 * If not, return false. There is no set of 3 numbers that satisfy the desired condition.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param nums
 */
function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }
  for (let i = 0, min = undefined, mid = undefined; i < nums.length; i++) {
    if (min === undefined || (nums[i] < min && i < nums.length - 2)) {
      min = nums[i];
      continue;
    }
    if (nums[i] > min && (mid === undefined || nums[i] < mid)) {
      mid = nums[i];
      continue;
    }
    if (mid !== undefined && nums[i] > mid) {
      return true;
    }
  }
  return false;
}

export default increasingTriplet;
