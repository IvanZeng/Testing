# N-Queens

# The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

# Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

# Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

# Example 1:
# Input: n = 4
# Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
# Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

# Example 2:
# Input: n = 1
# Output: [["Q"]]


# Solution from Copilot (correct)
# Big O time complexity: O(n!)
class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        def dfs(queens, xy_diff, xy_sum):
            p = len(queens)
            if p==n:
                result.append(queens)
                return None
            for q in range(n):
                if q not in queens and p-q not in xy_diff and p+q not in xy_sum:
                    dfs(queens+[q], xy_diff+[p-q], xy_sum+[p+q])
        result = []
        dfs([],[],[])
        return [["."*i+"Q"+"."*(n-i-1) for i in sol] for sol in result]
    


# Solution from ChatGPT (correct)
# Big O time complexity: O(n!)
class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        board = [["." for i in range(n)] for j in range(n)]
        result = []

        def backtrack(row):
            if row == n:
                result.append(["".join(row) for row in board])
                return
            for col in range(n):
                if is_valid(row, col):
                    board[row][col] = "Q"
                    backtrack(row + 1)
                    board[row][col] = "."
        
        def is_valid(row, col):
            for i in range(row):
                if board[i][col] == "Q":
                    return False
            for i, j in zip(range(row - 1, -1, -1), range(col - 1, -1, -1)):
                if board[i][j] == "Q":
                    return False
            for i, j in zip(range(row - 1, -1, -1), range(col + 1, n)):
                if board[i][j] == "Q":
                    return False
            return True

        backtrack(0)
        return result
