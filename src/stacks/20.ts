function isValid(s: string): boolean {
  const stack: string[] = [];

  const closingChars: {[index: string]: string} = {
    '}': '{',
    ')': '(',
    ']': '['
  }

  for (const c of s) {
    if (closingChars[c] && stack.length && stack[stack.length - 1] === closingChars[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;

};

console.log(isValid("({[}})"));