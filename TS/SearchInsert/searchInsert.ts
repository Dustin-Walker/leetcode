// https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=binary-search
function searchInsert(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length % 2 === 0) {
    // Even number case
    const leftOfCenterIndex = nums.length / 2 - 1;
    const rightOfCenterIndex = nums.length / 2;
    if (leftOfCenterIndex === target) {
      return nums[leftOfCenterIndex];
    }
    if (rightOfCenterIndex === target) {
      return nums[rightOfCenterIndex];
    }
    if (nums[nums.length / 2 - 1] < target) {
      return searchInsert(nums.slice(rightOfCenterIndex), target);
    } else {
      return searchInsert(nums.slice(0, rightOfCenterIndex), target);
    }
  } else {
    // Odd number case
    const centerIndex = Math.ceil(nums.length / 2);
    const leftOfCenterIndex = Math.floor(nums.length / 2);
    const rightOfCenterIndex = Math.floor(nums.length / 2) + 2;
    if (centerIndex === target) {
      return nums[centerIndex];
    }
    if (leftOfCenterIndex === target) {
      return nums[leftOfCenterIndex];
    }
    if (rightOfCenterIndex === target) {
      return nums[rightOfCenterIndex];
    }
    if (nums[leftOfCenterIndex] < target) {
      // Recursively return this function with the right half of the array
      return searchInsert(nums.slice(rightOfCenterIndex), target);
    } else {
      // Recursively return this function with the left half of the array
      return searchInsert(nums.slice(0, rightOfCenterIndex), target);
    }
  }
}
