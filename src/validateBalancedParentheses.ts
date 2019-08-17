export function solution(input: string): boolean {
  const stack = [];
  for (const ch of input) {
    switch (ch) {
      case '(':
        stack.push(ch);
        break;
      case '{':
        stack.push(ch);
        break;
      case '[':
        stack.push(ch);
        break;
      case ')':
        if (stack.length === 0 || stack.pop() !== '(') return false;
        break;
      case '}':
        if (stack.length === 0 || stack.pop() !== '{') return false;
        break;
      case ']':
        if (stack.length === 0 || stack.pop() !== '[') return false;
        break;
    }
  }
  return stack.length === 0;
}
