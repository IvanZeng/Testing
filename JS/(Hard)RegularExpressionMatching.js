// Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

 

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var isMatch = function(s, p) {
    if (p.length == 0) return s.length == 0;
    let first_match = (s.length > 0 && (p[0] == s[0] || p[0] == '.'));
    if (p.length >= 2 && p[1] == '*'){
        return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p)));
    } else {
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
};



// Solution from ChatGPT (correct)
// Big O time complexity:  O(n^2)
var isMatch = function(s, p) {
    const dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(false));

    dp[0][0] = true;

    for (let i = 1; i < p.length; i += 2) {
        if (p[i] === '*') {
            dp[0][i + 1] = dp[0][i - 1];
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    return dp[s.length][p.length];
};