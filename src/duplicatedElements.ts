// Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

function solution(nums: number[], target: number): number[] {
  const answer = [-1, -1];
  const len = nums.length;
  if (len < 2) return answer;
  if (nums[0] > target) return answer;
  if (nums[len - 1] < target) return answer;

  // lastindexof
  // firstindexof

  let hasDuplicate = false;
  for (let i = 0; i < len; i++) {
    const current = nums[i];
    if (current < target) continue;
    if (current > target) break;
    if (current === target) {
      if (hasDuplicate) {
        answer[1] = i;
      } else {
        answer[0] = i;
        answer[1] = i;
        hasDuplicate = true;
      }
    }
  }

  return answer;
}

export default solution;
