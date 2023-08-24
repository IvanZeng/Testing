# Median of Two Sorted Arrays

# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

# The overall run time complexity should be O(log (m+n)).

# Example 1:
# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Explanation: merged array = [1,2,3] and median is 2.

# Example 2:
# Input: nums1 = [1,2], nums2 = [3,4]
# Output: 2.50000
# Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


# Solution from Copilot (correct)
# Big O time complexity: O(log n)
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        m = len(nums1)
        n = len(nums2)
        if m > n:
            nums1, nums2, m, n = nums2, nums1, n, m
        if n == 0:
            raise ValueError
        imin, imax, half_len = 0, m, int((m + n + 1) / 2)
        while imin <= imax:
            i = int((imin + imax) / 2)
            j = half_len - i
            if i < m and nums2[j - 1] > nums1[i]:
                imin = i + 1
            elif i > 0 and nums1[i - 1] > nums2[j]:
                imax = i - 1
            else:
                if i == 0:
                    max_of_left = nums2[j - 1]
                elif j == 0:
                    max_of_left = nums1[i - 1]
                else:
                    max_of_left = max(nums1[i - 1], nums2[j - 1])
                if (m + n) % 2 == 1:
                    return max_of_left
                if i == m:
                    min_of_right = nums2[j]
                elif j == n:
                    min_of_right = nums1[i]
                else:
                    min_of_right = min(nums1[i], nums2[j])
                return (max_of_left + min_of_right) / 2.0
            


# Solution from ChatGPT (incorrect)
# Big O time complexity: O(log n)
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        m, n = len(nums1), len(nums2)
        total_len = m + n

        mid = (total_len + 1) // 2
        
        def get_kth_element(k):
            """
            Return the k-th element in the merged sorted arrays nums1 and nums2
            """
            if len(nums1) > len(nums2):
                nums1, nums2 = nums2, nums1
            
            m, n = len(nums1), len(nums2)
            
            if m == 0:
                return nums2[k-1]
            
            if k == 1:
                return min(nums1[0], nums2[0])
            
            i = min(m, k//2)
            j = min(n, k//2)
            
            if nums1[i-1] < nums2[j-1]:
                return get_kth_element(k-i, nums1[i:])
            else:
                return get_kth_element(k-j, nums1, nums2[j:])
        
        if total_len % 2 == 1:
            return get_kth_element(mid)
        else:
            return (get_kth_element(mid) + get_kth_element(mid+1)) / 2.0