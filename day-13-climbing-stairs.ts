function climbStairs(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let t1 = 1,
    t2 = 2;
  for (let i = 3; i <= n; i++) {
    const temp = t1 + t2;
    t1 = t2;
    t2 = temp;
  }
  return t2;
}
