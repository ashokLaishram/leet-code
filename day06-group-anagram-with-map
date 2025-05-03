function groupAnagrams(strs: string[]): string[][] {
  const groupsMap: Map<string, string[]> = new Map();

  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (groupsMap.has(key)) {
      groupsMap.get(key)!.push(s);
    } else {
      groupsMap.set(key, [s]);
    }
  }

  return Array.from(groupsMap.values());
}
