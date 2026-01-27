/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  const charArray = s.split('');
  let res = 1;
  for (let i = 0; i < charArray.length; i++) {
    const char = charArray[i];
    if (map.has(char)) {
      res = Math.max(res, i - map.get(char));
    }
    map.set(char, i);
  }
  return res;
};

const sample_1 = 'abcabcbb'
const sample_2 = 'bbbbb'
const sample_3 = 'pwwkew'

console.log(lengthOfLongestSubstring(sample_1))
console.log(lengthOfLongestSubstring(sample_2))
console.log(lengthOfLongestSubstring(sample_3)) 