// HoFn
const promise3 = () =>
  new Promise((res, _rej) => {
    setTimeout(() => {
      res('resolved');
    }, 1000);
  });

const promise4 = () =>
  new Promise((_res, rej) => {
    setTimeout(() => {
      rej('rejected');
    }, 1000);
  });

xdescribe('JEST can assert Async/Await', () => {
  it('is easier than using Promise matchers .resolves()', async () => {
    await expect(promise3()).resolves.toEqual('resolved');
  });

  it('is easier than using Promise matchers .rejects()', async () => {
    await expect(promise4()).rejects.toEqual('rejected');
  });
});

// NOTICE: Opposite to testing Promises, here, we don't need to return!
