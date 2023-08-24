//Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n)
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let rows = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push("");
    }
    let curRow = 0;
    let goingDown = false;
    for (let c of s) {
        rows[curRow] += c;
        if (curRow == 0 || curRow == numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }
    return rows.join("");
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n)
var convert = function(s, numRows) {
    if (numRows === 1) {
      return s;
    }
    
    var rows = [];
    for (var i = 0; i < numRows; i++) {
      rows[i] = [];
    }
    
    var row = 0;
    var direction = 1;
    for (var i = 0; i < s.length; i++) {
      rows[row].push(s.charAt(i));
      
      if (row === 0) {
        direction = 1;
      } else if (row === numRows - 1) {
        direction = -1;
      }
      
      row += direction;
    }
    
    var result = '';
    for (var i = 0; i < numRows; i++) {
      result += rows[i].join('');
    }
    
    return result;
  };