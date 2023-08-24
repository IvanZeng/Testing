# Generate Parentheses

# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# Example 1:
# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]

# Example 2:
# Input: n = 1
# Output: ["()"]


# Solution from Copilot (correct)
# Big O time complexity: O(2^n)
class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        
        def backtrack(s, left, right):
            if len(s) == 2 * n:
                result.append(s)
                return
            
            if left < n:
                backtrack(s + "(", left + 1, right)
            if right < left:
                backtrack(s + ")", left, right + 1)
        
        backtrack("", 0, 0)
        return result
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(2^n)
class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        
        def backtrack(current, open, close):
            if len(current) == n * 2:
                result.append(current)
                return
            
            if open < n:
                backtrack(current + "(", open + 1, close)
            
            if close < open:
                backtrack(current + ")", open, close + 1)
        
        backtrack("", 0, 0)
        
        return result
        