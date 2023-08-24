// Palindrome Number

// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


//Solution from Copilot (correct)
//Big O time complexity O(n)
class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) {
            return false;
        }
        String s = Integer.toString(x);
        int i = 0;
        int j = s.length() - 1;
        while(i < j) {
            if(s.charAt(i) != s.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
        
    }
}

//Solution from ChatGPT (correct)
//Big O time complexity O(n)
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) { 
            return false;
        }
        int reversed = 0; 
        int original = x; 
        while (original != 0) { 
            int digit = original % 10;
            reversed = reversed * 10 + digit;
            original /= 10;
        }
        return x == reversed; 
    }
}
