function myFn() {
  // fetch API...
  // then...
  // catch...
  throw new Error('This is an error msg');
}

xdescribe('JEST can assert Excpetions', () => {
  it('Throw Errors', () => {
    // NOTICE we recreate a RETURN using an arrow Fn
    expect(() => myFn()).toThrowError;
    expect(() => myFn()).toThrow(Error);
    expect(() => myFn()).toThrow('This is'); // NOTICE this is auto substringed :)
  });
});
