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

  it('use toBeCloseTo() to avoid bugs when adding Floats', () => {
    const addedFloats = 0.157 + 0.253;
    // expect<number>(addedFloats).toBe(0.41); // prone to errors --> Expected: 0.41 / Received: 0.41000000000000003
    // expect<number>(addedFloats).toEqual(0.41); // prone to errors --> Expected: 0.41 / Received: 0.41000000000000003
    expect<number>(addedFloats).toBeCloseTo(0.41);
  });

  it('assert coerced Numbers', () => {
    expect<string>(coerced).toEqual(expect.any(String)); // ~ toBe('50');
    expect<number>(+coerced).toEqual(expect.any(Number)); // ~ toBe(50);
  });
});

xdescribe('JEST can assert NaN', () => {
  it('assert NaN', () => {
    expect<string>(text).toBeNaN; // ~ .not.toEqual(expect.any(Number))
  });
});

// Use toBe() only with literals (numbers, strings. {}). But in hat scenario toEqual() is equivalent.
// So GOOD PRACTICE => never use toBe().... use toEqual() instead.
// The only case where we really need toBe() is to test REFs... but we can workaround it and gain more readability -> see objects tests
