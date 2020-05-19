/**
 * Input: String
 * Output: String ("IPv4", "IPv6", "Neither")
 *
 * Rules:
 * - IPv4
 *   - four decimal numbers, ranging from 0 to 255, separated by ".", no leading 0
 * - IPv6
 *   - 8 groups of 4 hexadecimal digits, separated by ";", leading 0 are ok but not necessary
 *
 * Algo:
 * - If string includes ".", split string on ".", validateIPv4
 *   - if el not integer
 *   - if any el > 255
 *   - if any el[0] === 0
 *   - if arr.length !== 4
 * - If string includes ":", split string on ":", validate IPv6
 *   - if arr.length !== 8
 *   - if any el.length > 4
 */

const validateIPv4 = ip => {
  const ipArr = ip.split('.');

  for (let el of ipArr) {
    const int = parseInt(el, 10);
    const hasNonIntegers = int.toString().length !== el.length;
    const greaterThan255 = int > 255;
    const hasLeadingZero = (el[0] = 0);
    if (hasNonIntegers || greaterThan255 || hasLeadingZero) {
      return 'Neither';
    }
  }
  return 'IPv4';
};

const validateIPv6 = ip => {
  const ipArr = ip.split(':');

  for (let el of ipArr) {
    const hasGreaterThanFourDigits = el.length > 4;
    const hasEmptyEl = el === '';

    if (hasGreaterThanFourDigits || hasEmptyEl) {
      return 'Neither';
    }
  }

  return 'IPv6';
};

const validateIp = ip => {
  if (ip.split('.').length === 4) {
    return validateIPv4(ip);
  } else if (ip.split(':').length === 8) {
    return validateIPv6(ip);
  } else {
    return 'Neither';
  }
};

// Test cases
console.log(validateIp('172.16.254.1')); // "IPv4"
console.log(validateIp('172.1e.254.1')); // "Neither"
console.log(validateIp('256.16.254.1')); // "Neither"
console.log(validateIp('172.016.254.1')); // "Neither"
console.log(validateIp('2001:0db8:85a3:0:0:8A2E:0370:7334')); // "IPv6"
console.log(validateIp('20012:0db8:85a3:0:0:8A2E:0370:7334')); // "Neither"
console.log(validateIp('20012:0db8:85a3:0:0:8A2E::7334')); // "Neither"
console.log(validateIp('172.16')); // "Neither"
console.log(validateIp('172:16')); // "Neither"
console.log(validateIp('256.256.256.256')); // "Neither"
console.log(validateIp('172.16.254.01')); // "Neither" (leading 0)
