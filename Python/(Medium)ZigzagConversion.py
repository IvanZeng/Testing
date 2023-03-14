# Zigzag Conversion

# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);
 
# Example 1:
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

# Example 3:
# Input: s = "A", numRows = 1
# Output: "A"


# Solution from Copilot (correct)
class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s
        result = ""
        for i in range(numRows):
            if i == 0 or i == numRows - 1:
                j = i
                while j < len(s):
                    result += s[j]
                    j += 2 * numRows - 2
            else:
                j = i
                while j < len(s):
                    result += s[j]
                    j += 2 * numRows - 2 - 2 * i
                    if j < len(s):
                        result += s[j]
                        j += 2 * i
        return result
    


# Solution from ChatGPT (correct)
class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s
        
        rows = [''] * numRows
        direction = -1
        row = 0
        
        for char in s:
            rows[row] += char
            if row == 0 or row == numRows - 1:
                direction *= -1
            row += direction
        
        return ''.join(rows)