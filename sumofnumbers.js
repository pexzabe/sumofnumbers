/**
 * Solving experience E26
 * Created by Albert on 9/26/2016.
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i += 1;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function memoizer(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));

