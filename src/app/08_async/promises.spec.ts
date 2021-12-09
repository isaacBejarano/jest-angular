// HoFn
const promise1 = () =>
  new Promise((res, _rej) => {
    setTimeout(() => {
      res('resolved');
    }, 1000);
  });

const promise2 = () =>
  new Promise((_res, rej) => {
    setTimeout(() => {
      rej('rejected');
    }, 1000);
  });

xdescribe('JEST can assert Pormises', () => {
  /* WAY A -> verbose. Don't use it */

  it('Promise is resolved', () => {
    return promise1().then((data) => expect(data).toEqual('resolved'));
  });

  it('Promise is rejected', () => {
    expect.assertions(1); // <- required when testing rejections!

    return promise2().catch((err) => expect(err).toMatch('rejected'));
  });

  /* WAY B -> cleaner. Use this! */

  it('Promise uses Jest resolves()', () => {
    return expect(promise1()).resolves.toEqual('resolved');
  });

  it('Promise uses Jest resolves()', () => {
    return expect(promise2()).rejects.toEqual('rejected');
  });
});

// NOTICE: we need to use RETURN!
