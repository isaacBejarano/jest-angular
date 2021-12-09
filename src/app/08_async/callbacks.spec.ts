function callMe(msg: string) {
  return msg;
}

function fetchData(msg: string, callMe: any) {
  setTimeout(callMe(msg), 1000);
}

xdescribe('JEST can assert Callbacks', () => {
  it('calls the callback', (done: jest.DoneCallback) => {
    // mock the callback
    function callMeMock(msg: string) {
      try {
        expect(msg).toEqual('message');
        done();
      } catch (err) {
        done(err);
      }
    }

    fetchData('message', callMeMock);
  });
});
