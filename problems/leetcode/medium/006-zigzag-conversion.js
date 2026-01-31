/**
 * LeetCode 6. Zigzag Conversion（Z 字形变换）
 *
 * 把字符串按 Z 字形写满 numRows 行，再按行从左到右拼接成新字符串。
 *
 * 思路：模拟「笔在 Z 上走」
 * - 用 numRows 个桶（字符串）代表每一行
 * - 遍历 s，把当前字符放到当前行，再根据「方向」更新行号
 * - 到顶（row=0）或到底（row=numRows-1）时拐弯
 *
 * 时间 O(n)，空间 O(n)
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;

  // 每一行用一个字符串收集该行上的字符
  const rows = Array.from({ length: numRows }, () => '');

  let currentRow = 0;
  let goingDown = true; // true=向下走，false=向上走

  for (const char of s) {
    rows[currentRow] += char;

    // 到顶或到底时拐弯
    if (currentRow === 0) goingDown = true;
    else if (currentRow === numRows - 1) goingDown = false;

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
};

// ---------- 示例 ----------
// numRows=3 时 Z 形：
//   P   A   H   N   → 第 0 行
//   A P L S I I G   → 第 1 行
//   Y   I   R       → 第 2 行
// 按行读：PAHNAPLSIIGYIR

const sample_1 = 'PAYPALISHIRING';
const sample_2 = 'PAYPALISHIRING';
const sample_3 = 'PAYPALISHIRING';

console.log(convert(sample_1, 3)); // "PAHNAPLSIIGYIR"
console.log(convert(sample_2, 4)); // "PINALSIGYAHRPI"
console.log(convert(sample_3, 1)); // "A"
