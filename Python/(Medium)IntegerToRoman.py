# Integer to Roman

# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000

# For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.
# Given an integer, convert it to a roman numeral.

# Example 1:
# Input: num = 3
# Output: "III"
# Explanation: 3 is represented as 3 ones.

# Example 2:
# Input: num = 58
# Output: "LVIII"
# Explanation: L = 50, V = 5, III = 3.

# Example 3:
# Input: num = 1994
# Output: "MCMXCIV"
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


# Solution from Copilot (correct)
# Big O time complexity: O(n)
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        result = ""
        while num >= 1000:
            result += "M"
            num -= 1000
        if num >= 900:
            result += "CM"
            num -= 900
        if num >= 500:
            result += "D"
            num -= 500
        if num >= 400:
            result += "CD"
            num -= 400
        while num >= 100:
            result += "C"
            num -= 100
        if num >= 90:
            result += "XC"
            num -= 90
        if num >= 50:
            result += "L"
            num -= 50
        if num >= 40:
            result += "XL"
            num -= 40
        while num >= 10:
            result += "X"
            num -= 10
        if num >= 9:
            result += "IX"
            num -= 9
        if num >= 5:
            result += "V"
            num -= 5
        if num >= 4:
            result += "IV"
            num -= 4
        while num >= 1:
            result += "I"
            num -= 1
        return result

    

# Solution from ChatGPT (correct)
# Big O time complexity: O(n)
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        
        roman = ""
        
        for i in range(len(values)):
            while num >= values[i]:
                num -= values[i]
                roman += symbols[i]
        
        return roman