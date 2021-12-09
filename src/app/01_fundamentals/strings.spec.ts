const str = 'Hola' + ' Mundo';

xdescribe('JEST can assert Strings', () => {
  // whole strings
  it('String matches', () => {
    expect(str).toMatch('Hola Mundo');
  });

  // substrings
  it('String cotains', () => {
    expect(str).not.toContain('LA MUN');
    expect(str).toContain('la Mun');
    expect(str).toEqual(expect.stringContaining('la Mun'));
    expect(str).toEqual(expect.stringMatching(new RegExp(/\w/)));
  });
});
