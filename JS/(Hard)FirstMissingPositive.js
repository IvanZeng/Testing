// First Missing Positive

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

/**
 * @param {number[]} nums
 * @return {number}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[nums[i] - 1]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return nums.length + 1;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var firstMissingPositive = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] !== nums[i]) {
            [nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i]-1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i+1) {
            return i+1;
        }
    }
    return n+1;
};