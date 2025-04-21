function isValid(s: string): boolean {
  const openBrackets = "({[";
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.indexOf(s[0]) === -1) {
      return false;
    }
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (getOpenedBracket(s[i]) !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function getOpenedBracket(c: string) {
  switch (c) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
  }
}
