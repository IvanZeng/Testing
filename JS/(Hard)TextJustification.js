// Text Justification

// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 
// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2:
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3:
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */


//Solution from Copilot (incorrect)
//Big O time complexity: O(n^2)
var fullJustify = function(words, maxWidth) {
    let result = [];
    let line = [];
    let lineLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (lineLength + words[i].length + line.length <= maxWidth) {
            line.push(words[i]);
            lineLength += words[i].length;
        } else {
            result.push(line);
            line = [words[i]];
            lineLength = words[i].length;
        }
    }
    result.push(line);
    
    for (let i = 0; i < result.length; i++) {
        let line = result[i];
        let lineLength = 0;
        for (let j = 0; j < line.length; j++) {
            lineLength += line[j].length;
        }
        let spaceCount = maxWidth - lineLength;
        if (line.length === 1) {
            line[0] += ' '.repeat(spaceCount);
        } else if (i === result.length - 1) {
            line[0] += ' '.repeat(spaceCount);
            for (let j = 1; j < line.length; j++) {
                line[0] += ' ' + line[j];
            }
            line.splice(1);
        } else {
            let space = Math.floor(spaceCount / (line.length - 1));
            let extraSpace = spaceCount % (line.length - 1);
            for (let j = 1; j < line.length; j++) {
                line[j] = ' '.repeat(space + (j <= extraSpace ? 1 : 0)) + line[j];
            }
        }
    }
    return result.map(line => line.join(''));
};



//Solution from ChatGPT (correct)
//Big O time complexity: O(n^2)
var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;
    while (i < words.length) {
        let j = i, lineLength = 0;
        while (j < words.length && lineLength + words[j].length + (j - i) <= maxWidth) {
            lineLength += words[j].length;
            j++;
        }
        let spaces = maxWidth - lineLength;
        let gaps = j - i - 1;
        let sb = [];
        if (gaps === 0 || j === words.length) {
            for (let k = i; k < j; k++) {
                sb.push(words[k]);
                if (k < j - 1) sb.push(" ");
            }
            sb.push(" ".repeat(maxWidth - sb.join("").length));
        } else {
            let spacesPerGap = Math.floor(spaces / gaps);
            let extraSpaces = spaces % gaps;
            for (let k = i; k < j; k++) {
                sb.push(words[k]);
                if (k < j - 1) {
                    let spacesToAdd = spacesPerGap + (extraSpaces-- > 0 ? 1 : 0);
                    sb.push(" ".repeat(spacesToAdd));
                }
            }
        }
        result.push(sb.join(""));
        i = j;
    }
    return result;
};