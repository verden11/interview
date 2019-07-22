// Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

export function solution(nums: number[], target: number): number[] {
  const answer = [-1, -1];
  const len = nums.length;
  if (len === 0) return answer;
  if (nums[0] > target) return answer;
  if (nums[len - 1] < target) return answer;

  answer[0] = nums.indexOf(target);
  answer[1] = nums.lastIndexOf(target);

  return answer;
}

export function solutionCustom(nums: number[], target: number): number[] {
  const answer = [-1, -1];
  const len = nums.length;
  if (len === 0) return answer;
  if (nums[0] > target) return answer;
  if (nums[len - 1] < target) return answer;

  const leftMost = extremeBinarySearch(nums, target, true);
  // ensure number exists
  if (nums[leftMost] !== target) {
    return answer;
  }
  answer[0] = leftMost;
  answer[1] = extremeBinarySearch(nums, target, false) - 1;

  return answer;
}

function extremeBinarySearch(nums: number[], targer: number, left: boolean): number {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    const mid = Math.trunc(lo + (hi - lo) / 2); // not to overflow
    if (nums[mid] > targer || (left && nums[mid] === targer)) {
      hi = mid; // start to mid
    } else {
      lo = mid + 1; // mid + 1 to end
    }
  }
  return lo;
}
