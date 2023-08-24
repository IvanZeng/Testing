# Text Justification

# Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

# You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

# Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

# For the last line of text, it should be left-justified, and no extra space is inserted between words.

# Note:

# A word is defined as a character sequence consisting of non-space characters only.
# Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
# The input array words contains at least one word.
 
# Example 1:
# Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
# Output:
# [
#    "This    is    an",
#    "example  of text",
#    "justification.  "
# ]

# Example 2:
# Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
# Output:
# [
#   "What   must   be",
#   "acknowledgment  ",
#   "shall be        "
# ]
# Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
# Note that the second line is also left-justified because it contains only one word.

# Example 3:
# Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
# Output:
# [
#   "Science  is  what we",
#   "understand      well",
#   "enough to explain to",
#   "a  computer.  Art is",
#   "everything  else  we",
#   "do                  "
# ]


# Solution from Copilot (correct)
# Big O time complexity: O(n)
class Solution(object):
    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        res = []
        curr = []
        curr_len = 0
        for word in words:
            if curr_len + len(word) + len(curr) > maxWidth:
                if len(curr) == 1:
                    res.append(curr[0] + ' ' * (maxWidth - len(curr[0])))
                else:
                    space = (maxWidth - curr_len) // (len(curr) - 1)
                    remainder = (maxWidth - curr_len) % (len(curr) - 1)
                    for i in range(remainder):
                        curr[i] += ' '
                    res.append((' ' * space).join(curr))
                curr = []
                curr_len = 0
            curr.append(word)
            curr_len += len(word)
        res.append(' '.join(curr) + ' ' * (maxWidth - curr_len - len(curr) + 1))
        return res
    


# Solution from ChatGPT (incorrect)
# Big O time complexity: O(n)
class Solution(object):
    def fullJustify(self, words, maxWidth):
        result = []
        i = 0
        while i < len(words):
            j = i
            line_length = len(words[j])
            while j < len(words) - 1 and line_length + len(words[j + 1]) + 1 <= maxWidth:
                j += 1
                line_length += len(words[j]) + 1
            if j == len(words) - 1 or j == i:
                # left-justified or last line
                line = " ".join(words[i:j+1])
                line += " " * (maxWidth - len(line))
            else:
                # fully justified
                spaces = maxWidth - line_length
                gaps = j - i
                spaces_per_gap = spaces // gaps
                extra_spaces = spaces % gaps
                line = ""
                for k in range(i, j):
                    line += words[k]
                    line += " " * spaces_per_gap
                    if extra_spaces > 0:
                        line += " "
                        extra_spaces -= 1
                line += words[j]
            result.append(line)
            i = j + 1
        return result