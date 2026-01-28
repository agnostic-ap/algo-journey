/**
 * LeetCode 1. Two Sum
 * Difficulty: Easy
 *
 * 思路：
 *  - 暴力解：枚举每一对下标 (i, j)，找到 nums[i] + nums[j] === target 即返回
 *  - 优化方向：可以使用哈希表在一次遍历中完成（时间复杂度 O(n)）
 *
 * 时间复杂度（当前实现）：O(n^2)
 * 空间复杂度：O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const maxIndex = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    const subTarget = target - nums[i]
    for (let j = maxIndex; j > i; j--) {
      console.log(i, j)
      if (nums[j] === subTarget) {
        return [i, j]
      }
    }
  }
};

const res = twoSum([2, 7, 11, 15], 9)
console.log(res)

