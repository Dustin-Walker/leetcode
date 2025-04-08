// https://leetcode.com/problems/median-of-two-sorted-arrays/

const isEvenNumber = (number: number): boolean => number % 2 === 0;

const middle = (array: number[]): number => {
    const middleOfArray = Math.floor(array.length / 2);
    if (isEvenNumber(array.length)) {
        return (array[middleOfArray] + array[middleOfArray - 1]) / 2;
    } else {
        return array[middleOfArray];
    }
}

const sum = (a: number, b: number) => a + b;

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const finalNumLength = Math.floor(((nums1.length + nums2.length) / 2) + 1);
    const finalNum = new Array(finalNumLength);

    if (nums1.length === 0) {
        return middle(nums2);
    }

    if (nums2.length === 0) {
        return middle(nums1);
    }

    for(let i = 0, j = 0, k = 0; k < finalNum.length; k++) {
        if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
            finalNum[k] = nums1[i];
            i += 1;
        } else {
            if (j < nums2.length && (i >= nums1.length || nums2[j] <= nums1[i])) {
                finalNum[k] = nums2[j];
                j += 1;
            }
        }
    }

    if (isEvenNumber(nums1.length + nums2.length)) {
        return finalNum.slice(-2).reduce(sum, 0) / 2;
    } else {
        return finalNum.slice(-1).reduce(sum, 0);
    }
};

export default findMedianSortedArrays;