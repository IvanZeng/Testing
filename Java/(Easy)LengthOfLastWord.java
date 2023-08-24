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


// Solution from Copilot (correct)
// Big O time complexity O(n)
class Solution {
    public int lengthOfLastWord(String s) {
        int count = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) != ' ') {
                count++;
            } else if (count > 0) {
                return count;
            }
        }
        return count;
    }
}



// Solution from ChatGPT (correct)
// Big O time complexity O(n)
class Solution {
    public int lengthOfLastWord(String s) {
        // Remove any trailing spaces from the string
        s = s.trim();
        
        // Split the string into an array of words
        String[] words = s.split(" ");
        
        // If there are no words, return 0
        if (words.length == 0) {
            return 0;
        }
        
        // Return the length of the last word in the array
        return words[words.length - 1].length();
    }
}