import findMedianSortedArrays from "./medianOfTwoSortedArrays";

describe('MedianOfTwoSortedArrays', () => {
    test('case 1', () => {
        const nums1 = [1,3];
        const nums2 = [2];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(2);
    })
    test('case 2', () => {
        const nums1 = [1,2];
        const nums2 = [3,4];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5);
    })
})