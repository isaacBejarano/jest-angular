const str = 'Hola' + ' Mundo';

xdescribe('JEST can assert Strings', () => {
  // whole strings
  it('String matches', () => {
    expect(str).toEqual('Hola Mundo'); // strictly
    expect(str).toMatch('Hola'); // ~toContain
  });

  // substrings
  it('String cotains', () => {
    expect(str).not.toContain('LA MUN');
    expect(str).toContain('la Mun');
    expect(str).toEqual(expect.stringContaining('la Mun'));
    expect(str).toEqual(expect.stringMatching(new RegExp(/\w/)));
  });
});
