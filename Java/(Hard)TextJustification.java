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


//Solution from Copilot (incorrect)
//Big O time complexity O(n)
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> ans = new ArrayList<>();
        int n = words.length;
        int i = 0;
        while (i < n) {
            int len = words[i].length();
            int j = i + 1;
            while (j < n && len + words[j].length() + 1 <= maxWidth) {
                len += words[j].length() + 1;
                j++;
            }
            int spaces = maxWidth - len;
            int gaps = j - i - 1;
            int spaces1 = 0;
            int spaces2 = 0;
            if (gaps > 0) {
                spaces1 = spaces / gaps;
                spaces2 = spaces % gaps;
            }
            StringBuilder sb = new StringBuilder();
            for (int k = i; k < j; k++) {
                sb.append(words[k]);
                if (k < j - 1) {
                    for (int l = 0; l < spaces1; l++) {
                        sb.append(' ');
                    }
                    if (spaces2 > 0) {
                        sb.append(' ');
                        spaces2--;
                    }
                }
            }
            for (int l = sb.length(); l < maxWidth; l++) {
                sb.append(' ');
            }
            ans.add(sb.toString());
            i = j;
        }
        return ans;
    }
}



//Solution from ChatGPT (correct)
//Big O time complexity O(n)
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        int i = 0;
        while (i < words.length) {
            int j = i, lineLength = 0;
            while (j < words.length && lineLength + words[j].length() + (j - i) <= maxWidth) {
                lineLength += words[j].length();
                j++;
            }
            int spaces = maxWidth - lineLength;
            int gaps = j - i - 1;
            StringBuilder sb = new StringBuilder();
            if (gaps == 0 || j == words.length) {
                for (int k = i; k < j; k++) {
                    sb.append(words[k]);
                    if (k < j - 1) sb.append(" ");
                }
                sb.append(" ".repeat(maxWidth - sb.length()));
            } else {
                int spacesPerGap = spaces / gaps;
                int extraSpaces = spaces % gaps;
                for (int k = i; k < j; k++) {
                    sb.append(words[k]);
                    if (k < j - 1) {
                        int spacesToAdd = spacesPerGap + (extraSpaces-- > 0 ? 1 : 0);
                        sb.append(" ".repeat(spacesToAdd));
                    }
                }
            }
            result.add(sb.toString());
            i = j;
        }
        return result;
    }
}