// Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

/**
 * @param {string} s
 * @return {number}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length > 0) {
            return words[i].length;
        }
    }
    return 0; 
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var lengthOfLastWord = function(s) {
    s = s.trim();
    
    var lastSpaceIndex = s.lastIndexOf(" ");
    
    if (lastSpaceIndex === -1) {
        return s.length;
    }
    
    return s.length - (lastSpaceIndex + 1);
};