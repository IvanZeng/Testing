// Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        if (sum % 2 === 0) {
            result = "0" + result;
        } else {
            result = "1" + result;
        }
        carry = sum > 1 ? 1 : 0;
    }
    if (carry === 1) {
        result = "1" + result;
    }
    return result;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var addBinary = function(a, b) {
    let carry = 0;
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a.charAt(i));
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b.charAt(j));
            j--;
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};