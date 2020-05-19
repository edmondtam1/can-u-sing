/**
 * Input: String: Roman numeral 1-3999
 * Output: Integer
 *
 * Rules:
 * - Largest to smallest, left to right
 * - I before V === 4
 * - I before X === 9
 * - X before L === 40
 * - X before C === 90
 * - C before D === 400
 * - C before M === 900
 *
 * Algorithm
 * - Instantiate a sum var
 * - Iterate over input string (roman numeral)
 * - If roman[i] === 'I'
 *   - if roman[i+1] === 'V', sum+=4, i+=2
 *   - if roman[i+1] === 'X', sum+=9, i+=2
 *   - else, sum+=1, i++
 * - If MAP[roman[i]] < MAP[roman[i+1]], sum += MAP[roman[i+1] - MAP[roman[i]], i += 2
 * - else, sum += MAP[roman[i]], i++
 *
 * Questions
 * - Write out entire algorithm or go test case by test case?
 */

const MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInteger = roman => {
  let i = 0;
  let sum = 0;

  while (i < roman.length) {
    // if (roman[i] === 'I') {
    //   if (roman[i + 1] === 'V') {
    //     sum += 4;
    //     i += 2;
    //   } else if (roman[i + 1] === 'X') {
    //     sum += 9;
    //     i += 2;
    //   } else {
    //     sum++;
    //     i++;
    //   }
    let currentValue = MAP[roman[i]];

    if (i + 1 < roman.length) {
      // Look at both values
      let nextValue = MAP[roman[i + 1]];

      if (currentValue < nextValue) {
        sum += nextValue - currentValue;
        i += 2;
      } else {
        sum += currentValue;
        i++;
      }
    } else {
      sum += currentValue;
      i++;
    }
  }
  return sum;
};

// Test Cases
console.log(romanToInteger('III')); // 3
console.log(romanToInteger('IV')); // 4
console.log(romanToInteger('IX')); // 9
console.log(romanToInteger('LVIII')); // 58
console.log(romanToInteger('MCMXCIV')); // 1994
