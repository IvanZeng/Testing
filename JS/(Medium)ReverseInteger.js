//Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */


// Solution from Copilot (correct)
var reverse = function(x) {
    let rev = 0;
    let num = x;
    while(num != 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num/10);
    }
    if(rev > 2147483647 || rev < -2147483648){
        return 0;
    }
    return rev;
};


// Solution from ChatGPT (correct)
var reverse = function(x) {
    let reversed = 0;
    const isNegative = x < 0;
    x = Math.abs(x);
    while (x > 0) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x / 10);
    }
    if (reversed > (2 ** 31 - 1)) {
      return 0;
    }
    return isNegative ? -reversed : reversed;
  };