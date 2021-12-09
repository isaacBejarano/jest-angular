import { Dog, dog } from './objects-classes';

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
});
