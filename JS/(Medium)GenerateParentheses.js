// Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var generateParenthesis = function(n) {
    const result = [];
    const helper = (open, close, str) => {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }
        if (open < n) {
            helper(open + 1, close, str + '(');
        }
        if (close < open) {
            helper(open, close + 1, str + ')');
        }
    }
    helper(0, 0, '');
    return result;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var generateParenthesis = function(n) {
    const result = [];
    
    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }
        
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }
    
    backtrack("", 0, 0);
    
    return result;
};