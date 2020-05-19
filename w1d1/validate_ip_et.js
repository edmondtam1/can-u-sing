// https://leetcode.com/problems/validate-ip-address/

// Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

// Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

// IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

// However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

// Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

// Note: You may assume there is no extra space or special characters in the input string.

const neither = 'Neither';

const isValidIPv4 = (IP) => {

};

const isValidIPv6 = (IP) => {

};

const validIPAddress = (IP) => {
  if (IP.split('.').length === 4) return isValidIPv4(IP);
  if (IP.split(':').length === 8) return isValidIPv6(IP);
  return neither;
};

// Examples

console.log(
  validIPAddress("0.0.0.0") === "IPv4",
  validIPAddress("255.255.255.255") === "IPv4",
  validIPAddress("172.16.254.1") === "IPv4",
  validIPAddress("0:0:0:0:0:0:0:0") === "IPv6",
  validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334") === "IPv6",
  validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334") === "IPv6",
  validIPAddress("2001:db8:85a3:0:0:8A2E:370:7334") === "IPv6",
  validIPAddress("2001:0db8:85a3::8A2E:0370:7334") === "Neither",
  validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334") === "Neither",
  validIPAddress("256.256.256.256") === "Neither",
  validIPAddress("001.255.255.255") === "Neither"
);

// Data structure
// Break string into array of strings

// Algo
// With array of strings, decide whether string should match IPv4 or IPv6 pattern based on : or .

// IPv4 checks:
// Make sure there are 4 sections
// Convert each section to number
// For each:
// Check >= 0 and <= 255
// Make sure converting back to string === number (get rid of trailing zeros)

// IPv6 checks:
// Check for 8 sections
// Lower case each to standardise
// For each:
// Check max of 4 elements
// Check that each element is 0-9, a-f