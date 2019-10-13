export class Stack {
  items: number[];
  constructor() {
    this.items = [];
  }

  push(val: number): void {
    this.items.push(val);
  }

  pop(): number {
    const val = this.items.pop();
    if (val == undefined) throw new Error('Stack is empty');
    return val;
  }

  peak(): number {
    if (this.items.length < 1) throw new Error('Stack is empty');
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
