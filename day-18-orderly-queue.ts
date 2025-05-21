function orderlyQueue(s: string, k: number): string {
  if (s.length === 0) return "";
  if (k > 1) {
    return s.split("").sort().join("");
  } else {
    let smallest = s;
    for (let i = 1; i <= s.length - 1; i++) {
      let newString = s.slice(1) + s[0];
      smallest = smallest < newString ? smallest : newString;
      s = newString;
    }
    return smallest;
  }
}
