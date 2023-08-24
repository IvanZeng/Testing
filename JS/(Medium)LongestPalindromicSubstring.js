// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n^2)
var longestPalindrome = function(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > result.length) {
                result = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > result.length) {
                result = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return result;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n^2)
var longestPalindrome = function(s) {
    let maxPalindrome = '';
    
    function getPalindromeLength(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    function expandAroundCenter(center) {
        let length1 = getPalindromeLength(center, center);
        let length2 = getPalindromeLength(center, center + 1);
        let length = Math.max(length1, length2);
        if (length > maxPalindrome.length) {
            maxPalindrome = s.substring(center - Math.floor((length - 1) / 2), center + Math.floor(length / 2) + 1);
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i);
    }
    
    return maxPalindrome;
};