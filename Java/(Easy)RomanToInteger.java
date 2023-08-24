// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



//Solution from Copilot (correct)
//Big O time complexity O(n)
class Solution {
    public int romanToInt(String s) {
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == 'I') {
                result += 1;
            } else if (c == 'V') {
                result += 5;
            } else if (c == 'X') {
                result += 10;
            } else if (c == 'L') {
                result += 50;
            } else if (c == 'C') {
                result += 100;
            } else if (c == 'D') {
                result += 500;
            } else if (c == 'M') {
                result += 1000;
            }
        }
        if (s.contains("IV")) {
            result -= 2;
        }
        if (s.contains("IX")) {
            result -= 2;
        }
        if (s.contains("XL")) {
            result -= 20;
        }
        if (s.contains("XC")) {
            result -= 20;
        }
        if (s.contains("CD")) {
            result -= 200;
        }
        if (s.contains("CM")) {
            result -= 200;
        }
        return result;
    }
}



//Solution from ChatGPT (correct)
//Big O time complexity O(n)
class Solution {
    public int romanToInt(String s) {
        // Initialize a hashmap to store the values of each Roman numeral
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        
        int result = 0;
        int prevValue = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = map.get(s.charAt(i));
            if (currValue < prevValue) {
                result -= currValue;
            } else {
                result += currValue;
            }
            prevValue = currValue;
        }
        
        return result;
    }
}