import { integer, float, coerced, text } from './numbers';

xdescribe('JEST can assert Numbers', () => {
  it('assert Integers', () => {
    expect(integer).not.toBeNaN; // ~ toEqual(expect.any(Number));
    expect<boolean>(Number.isInteger(integer)).toBe(true);
  });

  it('assert Floats', () => {
    expect(float).not.toBeNaN; // ~ toEqual(expect.any(Number));
    expect<boolean>(Number.isInteger(float)).toBe(false);
  });

  it('assert coherced Numbers', () => {
    expect<string>(coerced).toEqual(expect.any(String)); // ~ toBe('50');
    expect<number>(+coerced).toEqual(expect.any(Number)); // ~ toBe(50);
  });
});

xdescribe('JEST can assert NaN', () => {
  it('assert NaN', () => {
    expect<string>(text).toBeNaN; // ~ .not.toEqual(expect.any(Number))
  });
});
