// https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount += 1;
      i--;
    }
  }
  nums.push(...new Array(zeroCount).fill(0));
}

export default moveZeroes;
