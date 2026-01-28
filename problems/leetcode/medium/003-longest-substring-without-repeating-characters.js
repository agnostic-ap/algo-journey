/**
 * LeetCode 3. Longest Substring Without Repeating Characters
 * Difficulty: Medium
 *
 * 思路：
 *  - 使用滑动窗口 / 哈希表记录每个字符上一次出现的位置
 *  - 当遇到重复字符时，更新左边界，使窗口内始终保持无重复字符
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(k)，k 为字符集大小
 */

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