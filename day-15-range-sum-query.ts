class NumArray {
  private sum: number = 0;
  private prefixSum: number[] = [];

  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      this.sum = this.sum + nums[i];
      this.prefixSum[i] = this.sum;
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefixSum[right];
    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
