// Permutation Sequence

// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:
// Input: n = 3, k = 3
// Output: "213"

// Example 2:
// Input: n = 4, k = 9
// Output: "2314"

// Example 3:
// Input: n = 3, k = 1
// Output: "123"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */


// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var getPermutation = function(n, k) {
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    let result = "";
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    k--;
    for (let i = 0; i < n; i++) {
        factorial /= n - i;
        let index = Math.floor(k / factorial);
        result += nums[index];
        nums.splice(index, 1);
        k -= index * factorial;
    }
    return result;
};



// Solution from Copilot (correct)
// Big O time complexity: O(n)
var getPermutation = function(n, k) {
    let nums = [];
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        nums.push(i);
        factorial *= i;
    }
    
    k--;
    let result = "";
    
    for (let i = 0; i < n; i++) {
        factorial /= n - i;
        let index = Math.floor(k / factorial);
        result += nums[index];
        nums.splice(index, 1);
        k -= index * factorial;
    }
    
    return result;
};