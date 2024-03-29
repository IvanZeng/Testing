# Longest Substring Without Repeating Characters

# Given a string s, find the length of the longest 
# substring
#  without repeating characters.

# Example 1:
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

# Solution from Copilot (correct)
# Big O time complexity: O(n)
class Solution(object):
    def lengthOfLongestSubstring(self, s):
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
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s:
            return 0

        n = len(s)
        longest = 0
        start = 0
        char_idx = {}
        for i in range(n):
            if s[i] in char_idx and char_idx[s[i]] >= start:
                start = char_idx[s[i]] + 1
            char_idx[s[i]] = i
            longest = max(longest, i - start + 1)

        return longest