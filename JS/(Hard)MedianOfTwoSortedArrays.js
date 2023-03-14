// Median of Two Sorted Arrays


// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// Solution from Copilot (correct)
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let low = 0;
    let high = n1;
    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;
        let l1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1];
        let l2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1];
        let r1 = cut1 === n1 ? Number.MAX_SAFE_INTEGER : nums1[cut1];
        let r2 = cut2 === n2 ? Number.MAX_SAFE_INTEGER : nums2[cut2];
        if (l1 <= r2 && l2 <= r1) {
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            } else {
                return Math.max(l1, l2);
            }
        } else if (l1 > r2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    return 0.0;
};



// Solution from ChatGPT (correct)
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    if (m > n) {
        return findMedianSortedArrays(nums2, nums1); // Ensure nums1 is shorter
    }

    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];

        const minX = (partitionX === m) ? Infinity : nums1[partitionX];
        const minY = (partitionY === n) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error('Invalid input');
};