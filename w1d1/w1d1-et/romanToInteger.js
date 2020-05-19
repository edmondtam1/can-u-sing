// https://leetcode.com/problems/roman-to-integer/description/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Examples

const romanToVal = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
}

const romanToInt = s => {
  if (s.length === 0 || /[^IVXLCDM]/.test(s)) return null;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanToVal[s[i] + s[i + 1]]) {
      result += romanToVal[s[i] + s[i + 1]];
      i++;
    } else {
      result += romanToVal[s[i]];
    }
  }
  return result;
};

// Examples

console.log(
  romanToInt('') === null,
  romanToInt('Invalid') === null,
  romanToInt('III') === 3,
  romanToInt('IV') === 4,
  romanToInt('IX') === 9,
  romanToInt('LVIII') === 58,
  romanToInt('MCMXCIV') === 1994,
  romanToInt('MMMCMXCIX') === 3999,
);

// Data structure
// Integer to store answer, original string, 

// Algo
// Create mapping of all Roman letters (particularly ones like IV, CM) to integer values
// Check if all characters are valid or string is not empty
// Initialize result = 0
// Loop across all characters of string
// Test if string[i] + string[i + 1] are found in mapping
// If so, add value to result
// Else add value of string[i] to result
// Return result
// Time: O(S) where S is string length
// Space: O(1) (no new object created)