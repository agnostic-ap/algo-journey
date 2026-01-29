/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (!s || s.length < 2) return s;

  let start = 0;
  let maxLen = 0;

  // 从中心向两边扩展，返回能扩展出的回文长度
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 退出时 left、right 多走了一步，实际回文是 [left+1, right-1]
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const lenOdd = expand(i, i);       // 奇数长度，中心是一个字符
    const lenEven = expand(i, i + 1);  // 偶数长度，中心在两个字符之间
    const len = Math.max(lenOdd, lenEven);

    if (len > maxLen) {
      maxLen = len;
      // 根据中心 i 和长度 len 反推起点（分奇偶统一处理）
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.slice(start, start + maxLen);
};


/**
 * Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */

const sample_1 = "babad"
const sample_2 = "cbbd"

console.log(longestPalindrome(sample_1))
console.log(longestPalindrome(sample_2))