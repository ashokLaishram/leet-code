function twoSum(nums: number[], target: number): number[] {
  let found = false;
  let targetIdx = 0;
  while (!found) {
    const firstNumber = nums[targetIdx];
    for (let i = targetIdx; i <= nums.length; i++) {
      const secondNumber = nums[i + 1];
      const sum = firstNumber + secondNumber;
      if (sum === target) {
        return [targetIdx, i + 1];
      }
    }
    targetIdx++;
  }
  return [0, 0];
}
