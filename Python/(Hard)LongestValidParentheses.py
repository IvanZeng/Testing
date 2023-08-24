# Longest Valid Parentheses

# Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
# substring
# .

# Example 1:
# Input: s = "(()"
# Output: 2
# Explanation: The longest valid parentheses substring is "()".

# Example 2:
# Input: s = ")()())"
# Output: 4
# Explanation: The longest valid parentheses substring is "()()".

# Example 3:
# Input: s = ""
# Output: 0


# Solution from Copilot (incorrect)
# Big O time complexity: O(n)
class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        max_length = 0
        current_length = 0
        current_string = ""
        for c in s:
            if c not in current_string:
                current_string += c
                current_length += 1
                if current_length > max_length:
                    max_length = current_length
            else:
                current_string = current_string[current_string.index(c) + 1:]
                current_string += c
                current_length = len(current_string)
        return max_length
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(n)
class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        stack = [-1]
        max_len = 0
        
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    max_len = max(max_len, i - stack[-1])
        
        return max_len