// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]));
        }
        max = Math.max(max, i - start + 1);
        map.set(s[i], i + 1);
    }
    return max;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let maxLength = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
  };