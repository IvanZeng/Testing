# Add Binary

# Given two binary strings a and b, return their sum as a binary string.

# Example 1:
# Input: a = "11", b = "1"
# Output: "100"

# Example 2:
# Input: a = "1010", b = "1011"
# Output: "10101"


# Solution from Copilot (correct)
# Big O time complexity: O(log n)
class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        a = int(a, 2)
        b = int(b, 2)
        return bin(a+b)[2:]
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(n)
class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        binary_sum = ""
        carry = 0
        
        i, j = len(a)-1, len(b)-1
        while i >= 0 or j >= 0:
            bit_a = int(a[i]) if i >= 0 else 0
            bit_b = int(b[j]) if j >= 0 else 0
            
            current_sum = bit_a + bit_b + carry
            
            binary_sum = str(current_sum % 2) + binary_sum
            carry = current_sum // 2
            
            i -= 1
            j -= 1
        
        if carry > 0:
            binary_sum = str(carry) + binary_sum
        
        return binary_sum