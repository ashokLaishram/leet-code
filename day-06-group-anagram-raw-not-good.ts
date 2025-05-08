function groupAnagramsv0(strs: string[]): string[][] {
  let groups: string[][] = [[]];
  const foundIndex: number[] = [];
  for (let i = 0; i < strs.length; i++) {
    const s1 = strs[i];
    let group: string[] = [s1];
    if (!foundIndex.includes(i)) {
      foundIndex.push(i);
      for (let j = i + 1; j < strs.length; j++) {
        const s2 = strs[j];
        if (!foundIndex.includes(j) && isAnagram(s1, s2)) {
          group.push(s2);
          foundIndex.push(j);
        }
      }
      if (i == 0) {
        groups[0] = group;
      } else {
        groups.push(group);
      }
    }
  }

  return groups;
}

function isAnagram(str1: string, str2: string) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
