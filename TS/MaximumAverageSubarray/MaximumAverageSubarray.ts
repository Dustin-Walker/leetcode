// https://leetcode.com/problems/maximum-average-subarray-i

function findMaxAverage(nums: number[], k: number): number {
  const difference = nums.length - k;
  let maximumSum;
  for (let i = 0, localSum = 0; i <= difference; i++) {
    if (i === 0) {
      // set up the initial local sum only on the first iteration
      for (let j = 0; j < k; j++) {
        localSum += nums[j];
      }
      maximumSum = localSum;
    } else {
      localSum -= nums[i - 1];
      localSum += nums[i + k - 1];
      if (localSum > maximumSum!) {
        maximumSum = localSum;
      }
    }
  }
  return maximumSum! / k;
}

export default findMaxAverage;
