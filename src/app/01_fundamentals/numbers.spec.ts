import { integer, float, coherced, text } from './numbers';

describe('JEST can...', () => {
  it('assert Integers', () => {
    expect(integer).not.toBeNaN; // ~ toEqual(expect.any(Number));
    expect<boolean>(Number.isInteger(integer)).toBe(true);
  });

  it('assert Floats', () => {
    expect(float).not.toBeNaN; // ~ toEqual(expect.any(Number));
    expect<boolean>(Number.isInteger(float)).toBe(false);
  });

  it('assert coherced Numbers', () => {
    expect(coherced).toEqual(expect.any(String)); // ~ toBe('50');
    expect(+coherced).toEqual(expect.any(Number)); // ~ toBe(50);
  });

  it('assert NaN', () => {
    expect(text).toBeNaN; // ~ .not.toEqual(expect.any(Number))
  });
});
