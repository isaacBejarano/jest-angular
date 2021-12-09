import { arr, set } from './arrays-sets';

xdescribe('JEST can assert Iterables (Array/Set)', () => {
  // Arrays
  it('assert Array type', () => {
    expect(arr).toEqual(expect.any(Array)); // ~arrayContaining([expect.anything()])
  });

  it('assert Array values', () => {
    expect(arr).toContain('a'); // ~.toEqual(expect.arrayContaining(['a']))
  });

  // Sets
  it('assert Set type', () => {
    expect(set).toEqual(expect.any(Set));
  });

  it('assert Sets', () => {
    expect(set).toContain('h');
  });
});
