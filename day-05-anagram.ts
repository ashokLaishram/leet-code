function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let sMap = createMap(s);
  let tMap = createMap(t);
  if (sMap.size !== tMap.size) return false;
  for (const [key, value] of sMap.entries()) {
    if (tMap.get(key) !== value) return false;
  }
  return true;
}
function createMap(s: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}
