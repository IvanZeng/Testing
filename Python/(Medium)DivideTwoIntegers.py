# Divide Two Integers

# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

# The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

# Return the quotient after dividing dividend by divisor.

# Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

# Example 1:
# Input: dividend = 10, divisor = 3
# Output: 3
# Explanation: 10/3 = 3.33333.. which is truncated to 3.

# Example 2:
# Input: dividend = 7, divisor = -3
# Output: -2
# Explanation: 7/-3 = -2.33333.. which is truncated to -2.


# Solution from Copilot (correct)
# Big O time complexity: O(log(n))
class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        if dividend == 0:
            return 0
        if divisor == 1:
            return dividend
        if divisor == -1:
            if dividend > -2147483648:
                return -dividend
            else:
                return 2147483647
        if dividend == divisor:
            return 1
        if dividend == -divisor:
            return -1
        if dividend > 0 and divisor > 0:
            sign = 1
        else:
            sign = -1
        dividend = abs(dividend)
        divisor = abs(divisor)
        if dividend < divisor:
            return 0
        result = 0
        while dividend >= divisor:
            i = 0
            while dividend >= divisor << i:
                i += 1
            dividend -= divisor << (i-1)
            result += 1 << (i-1)
        return sign * result
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(log(n))
class Solution(object):
    def divide(self, dividend, divisor):
        # Handle special cases
        if divisor == 0:
            return float('inf') if dividend >= 0 else float('-inf')
        if dividend == -2147483648 and divisor == -1:
            return 2147483647
        
        # Determine sign of the result
        sign = 1
        if dividend < 0:
            sign *= -1
            dividend *= -1
        if divisor < 0:
            sign *= -1
            divisor *= -1
        
        # Perform division
        quotient = 0
        while dividend >= divisor:
            temp = divisor
            multiple = 1
            while dividend >= temp << 1:
                temp <<= 1
                multiple <<= 1
            quotient += multiple
            dividend -= temp
        
        # Apply sign and return result
        return sign * quotient