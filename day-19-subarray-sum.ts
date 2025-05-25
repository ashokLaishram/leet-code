function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const sumMap = new Map();
  sumMap.set(0, 1);

  for (let num of nums) {
    sum += num;
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k)!;
    }
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  return count;
}
