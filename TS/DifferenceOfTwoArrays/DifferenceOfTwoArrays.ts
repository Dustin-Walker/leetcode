// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
function findDifference2(nums1: number[], nums2: number[]): number[][] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const distinctNums1 = Array.from(s1).filter((num1) => !s2.has(num1));
  const distinctNums2 = Array.from(s2).filter((num2) => !s1.has(num2));
  return [distinctNums1, distinctNums2];
}

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const s1 = nums1.reduce((acc, curr) => {
    // @ts-ignore
    acc[curr] = true;
    return acc;
  }, {});
  const s2 = nums2.reduce((acc, curr) => {
    // @ts-ignore
    acc[curr] = true;
    return acc;
  }, {});
  const distinctNums1 = Object.keys(s1)
    // @ts-ignore
    .filter((num1) => !s2[num1])
    .map((num) => parseInt(num));
  const distinctNums2 = Object.keys(s2)
    // @ts-ignore
    .filter((num2) => !s1[num2])
    .map((num) => parseInt(num));
  return [distinctNums1, distinctNums2];
}

export default findDifference;
