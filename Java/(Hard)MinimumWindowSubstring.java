// Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


//Solution from Copilot (correct)
//Big O time complexity O(n)
class Solution {
    public String minWindow(String s, String t) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        int count = map.size();
        int left = 0;
        int right = 0;
        int minLen = Integer.MAX_VALUE;
        String res = "";
        while (right < s.length()) {
            char c = s.charAt(right);
            if (map.containsKey(c)) {
                map.put(c, map.get(c) - 1);
                if (map.get(c) == 0) {
                    count--;
                }
            }
            right++;
            while (count == 0) {
                char tempC = s.charAt(left);
                if (map.containsKey(tempC)) {
                    map.put(tempC, map.get(tempC) + 1);
                    if (map.get(tempC) > 0) {
                        count++;
                    }
                }
                if (right - left < minLen) {
                    minLen = right - left;
                    res = s.substring(left, right);
                }
                left++;
            }
        }
        return res;
    }
}



//Solution from ChatGPT (correct)
//Big O time complexity O(n)
class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : t.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        int n = s.length();
        int left = 0, right = 0;
        int count = freq.size();
        int minLength = Integer.MAX_VALUE;
        String minWindow = "";
        while (right < n) {
            char c = s.charAt(right);
            if (freq.containsKey(c)) {
                freq.put(c, freq.get(c) - 1);
                if (freq.get(c) == 0) {
                    count--;
                }
            }
            right++;
            while (count == 0) {
                if (right - left < minLength) {
                    minLength = right - left;
                    minWindow = s.substring(left, right);
                }
                char d = s.charAt(left);
                if (freq.containsKey(d)) {
                    freq.put(d, freq.get(d) + 1);
                    if (freq.get(d) > 0) {
                        count++;
                    }
                }
                left++;
            }
        }
        return minWindow;
    }
}