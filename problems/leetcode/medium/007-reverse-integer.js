/**
 * 7. Reverse Integer
Medium
Topics
premium lock icon
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
 */

const MIN_32 = -(2 ** 31);
const MAX_32 = 2 ** 31 - 1;

const reverse = (x) => {
  const isNegative = x < 0;
  const xString = x.toString();
  const reversedString = xString.split('').reverse().join('');
  const reversedNumber = parseInt(reversedString);
  const result = isNegative ? -reversedNumber : reversedNumber;

  if (result < MIN_32 || result > MAX_32) {
    return 0;
  }
  return result;
};

const sample_1 = 123;
const sample_2 = -123;
const sample_3 = 120;

console.log(reverse(sample_1));
console.log(reverse(sample_2));
console.log(reverse(sample_3));