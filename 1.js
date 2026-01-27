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

