function twoSumWithHashMap(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  map.set(target - nums[0], 0);

  for (let i = 1; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i])!, i];
    }
    map.set(complement, i);
  }

  return [-1, -1];
}
