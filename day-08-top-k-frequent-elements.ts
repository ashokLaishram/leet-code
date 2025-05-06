function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1]) // Sort by frequency
    .slice(0, k) // Take top k
    .map((e) => e[0]); // Return just the elements
}
