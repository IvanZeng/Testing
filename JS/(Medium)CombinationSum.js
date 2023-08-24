// Combination Sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(2^n)
var combinationSum = function(candidates, target) {
    let res = [];
    let n = candidates.length;
    let path = [];
    let dfs = (start, target) => {
        if (target === 0) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < n; i++) {
            if (target - candidates[i] < 0) {
                continue;
            }
            path.push(candidates[i]);
            dfs(i, target - candidates[i]);
            path.pop();
        }
    }
    dfs(0, target);
    return res;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(2^n)
var combinationSum = function(candidates, target) {
    const result = [];
    const current = [];
    backtrack(result, current, candidates, target, 0);
    return result;
};

const backtrack = (result, current, candidates, target, start) => {
    if (target === 0) {
        result.push([...current]);
        return;
    }
    if (target < 0) {
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        current.push(candidates[i]);
        backtrack(result, current, candidates, target-candidates[i], i);
        current.pop();
    }
};