// Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

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

/**
 * @param {number} x
 * @return {boolean}
 */


//Solution from Copilot (correct)
// Big O time complexity: O(n)
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let rev = 0;
    let num = x;
    while(num > 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num/10);
    }
    return rev == x;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var isPalindrome = function(x) {
    if (x < 0) { 
        return false;
    }
    
    const reversed = x.toString().split('').reverse().join('');
    
    return x.toString() === reversed;
};
