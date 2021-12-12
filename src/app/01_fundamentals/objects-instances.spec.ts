import { Dog, dog } from './objects-instances';

xdescribe('JEST can assert Objects and Classes', () => {
  // Classes
  it('assert Class type', () => {
    expect(dog).toEqual(expect.any(Dog));
    expect(dog).toBeInstanceOf(Dog);
    // props and methods
    expect(dog.barkMsg).toContain('of w');
    expect(dog.barks()).toContain('of w');
    expect(dog.barks()).toEqual(expect.stringContaining('of w'));
    expect(dog.barks()).toEqual(expect.stringMatching(new RegExp(/\w/)));
  });

  // Objects
  it('assert Object type', () => {
    expect(dog).toEqual(expect.any(Object)); // ~.objectContaining({}))
  });

  // REFs
  it('assert Object references', () => {
    const player1 = { name: 'John', age: 25 };
    const player2 = { name: 'John', age: 25 };

    // Intention of testing reference not ovbious
    expect(player1).toBe(player1); // passes
    expect(player1).not.toBe(player2); // passes
    expect(player1).toEqual(player1); // passes
    // expect(player1).not.toEqual(player2); // fails

    // SOLUTION: use toEqual
    expect(player1 === player1).toEqual(true);
    expect(player1 === player2).toEqual(false);
  });
});

// Use toBe() only with literals (numbers, strings. {}). But in hat scenario toEqual() is equivalent.
// So GOOD PRACTICE => never use toBe().... use toEqual() instead.
// The only case where we really need toBe() is to test REFs... but we can workaround it and gain more readability
