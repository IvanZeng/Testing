# Permutation Sequence

# The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

# By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
# "123"
# "132"
# "213"
# "231"
# "312"
# "321"
# Given n and k, return the kth permutation sequence.

# Example 1:
# Input: n = 3, k = 3
# Output: "213"

# Example 2:
# Input: n = 4, k = 9
# Output: "2314"

# Example 3:
# Input: n = 3, k = 1
# Output: "123"


# Solution from Copilot (correct)
# Big O time complexity: O(n)
class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        fact = [1] * (n + 1)
        for i in range(1, n + 1):
            fact[i] = fact[i - 1] * i
        k -= 1
        res = ""
        nums = [i for i in range(1, n + 1)]
        for i in range(n, 0, -1):
            idx = k // fact[i - 1]
            k %= fact[i - 1]
            res += str(nums[idx])
            nums.remove(nums[idx])
        return res
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(n)
class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        factorials = [1] * n
        for i in range(1, n):
            factorials[i] = factorials[i-1] * i
        
        k -= 1
        
        digits = list(range(1, n+1))
        
        result = ''
        for i in reversed(range(n)):
            j = k // factorials[i]
            
            result += str(digits[j])
            
            digits.pop(j)
            
            k %= factorials[i]
        
        return result