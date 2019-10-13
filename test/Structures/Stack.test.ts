import { Stack } from '../../src/structures/Stack';

describe('Stack', (): void => {
  it('can push', (): void => {
    const stack = new Stack();
    stack.push(0);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
  });

  it('can pop', (): void => {
    const stack = new Stack();
    const item = 17;
    stack.push(item);

    expect(stack.size()).toBe(1);

    const top = stack.pop();
    expect(top).toBe(item);
    expect(stack.size()).toBe(0);
  });

  it('can chek if is empty', (): void => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });

  it('can return peak', (): void => {
    const stack = new Stack();
    const item = 17;
    stack.push(item);

    expect(stack.size()).toBe(1);
    const peak = stack.peak();
    expect(peak).toBe(item);
    expect(stack.size()).toBe(1);
  });

  describe('errors', (): void => {
    it('throws on empty pop', (): void => {
      const stack = new Stack();
      expect(() => stack.pop()).toThrow();
      expect(() => stack.pop()).toThrowErrorMatchingInlineSnapshot(`"Stack is empty"`);
    });

    it('throws on empty peak', (): void => {
      const stack = new Stack();
      expect(() => stack.peak()).toThrow();
      expect(() => stack.peak()).toThrowErrorMatchingInlineSnapshot(`"Stack is empty"`);
    });
  });
});
