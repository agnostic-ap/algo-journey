/**
 * LeetCode 4. Median of Two Sorted Arrays
 * Difficulty: Hard
 *
 * 思路（当前实现-简单版）：
 *  - 先把两个有序数组合并，再整体排序
 *  - 根据合并后数组长度的奇偶性，取中间一个或两个数求中位数
 *  - 这种方法不满足题目要求的 O(log (m+n))，但实现简单，便于理解题意
 *
 * 时间复杂度（当前实现）：O((m+n) log (m+n))
 * 空间复杂度：O(m+n)
 */


var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const midIndex = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    return mergedArray[midIndex];
  }
};

const sample_1 = [1, 3]
const sample_2 = [2]

console.log(findMedianSortedArrays(sample_1, sample_2))


const sample_3 = [1, 2]
const sample_4 = [3, 4]

console.log(findMedianSortedArrays(sample_3, sample_4))