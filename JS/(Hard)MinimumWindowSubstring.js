// Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var minWindow = function(s, t) {
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) + 1);
        } else {
            map.set(t[i], 1);
        }
    }
    let count = map.size;
    let left = 0;
    let right = 0;
    let min = Infinity;
    let result = "";
    while (right < s.length) {
        let char = s[right];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                count--;
            }
        }
        while (count === 0) {
            let temp = s[left];
            if (map.has(temp)) {
                map.set(temp, map.get(temp) + 1);
                if (map.get(temp) > 0) {
                    count++;
                }
            }
            if (right - left + 1 < min) {
                min = right - left + 1;
                result = s.substring(left, right + 1);
            }
            left++;
        }
        right++;
    }
    return result;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var minWindow = function(s, t) {
    const charCount = new Map();
    for (let i = 0; i < t.length; i++) {
      const char = t.charAt(i);
      charCount.set(char, charCount.get(char) + 1 || 1);
    }
  
    let left = 0;
    let right = 0;
    let count = charCount.size;
    let result = "";
  
    while (right < s.length) {
      const char = s.charAt(right);
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) === 0) count--;
      }
      right++;
  
      while (count === 0) {
        const temp = s.slice(left, right);
        if (result === "" || temp.length < result.length) result = temp;
        const leftChar = s.charAt(left);
        if (charCount.has(leftChar)) {
          charCount.set(leftChar, charCount.get(leftChar) + 1);
          if (charCount.get(leftChar) > 0) count++;
        }
        left++;
      }
    }
  
    return result;
  };