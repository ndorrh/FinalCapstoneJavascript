import { commentCounter } from '../src/modules/commentCounter.js';

describe('Comment count tests', () => {
  it('Return value 4', () => {
    const arr = [1, 2, 'q', true];
    const result = commentCounter(arr);
    expect(result).toBe(4);
  });

  it('Return value 0', () => {
    const arr = [];
    const result = commentCounter(arr);
    expect(result).toBe(0);
  });
});