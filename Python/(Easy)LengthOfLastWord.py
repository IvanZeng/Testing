# Length of Last Word

# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal 
# substring
#  consisting of non-space characters only.

# Example 1:
# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.

# Example 2:
# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.

# Example 3:
# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.


# Solution from Copilot (correct)
# Big O time complexity: O(n)
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 0:
            return 0
        if s[-1] == ' ':
            return self.lengthOfLastWord(s[:-1])
        else:
            return len(s.split(' ')[-1])
        


# Solution from ChatGPT (correct)
# Big O time complexity: O(n)
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()
        i = len(s) - 1

        while i >= 0 and s[i] != ' ':
            i -= 1

        return len(s) - i - 1