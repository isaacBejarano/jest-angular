import { sum } from './mock.functions';

const mockSum = jest.fn(sum);
// jest.fn() to mock FUNCTIONS

xdescribe('JEST mocks functions', () => {
  it('"mock" property members --> calls / results', () => {
    // calls
    mockSum(3, 7); // calls[0] => results[0]
    mockSum(8, 5); // calls[1] => results[1]

    // The mock function is called twice
    expect(mockSum.mock.calls.length).toBe(2);

    // The first argument of the first call to the function
    expect(mockSum.mock.calls[0][0]).toBe(3);

    // The second argument of the first call to the function
    expect(mockSum.mock.calls[0][1]).toBe(7);

    // The first argument of the second call to the function
    expect(mockSum.mock.calls[1][0]).toBe(8);

    // The second argument of the second call to the function
    expect(mockSum.mock.calls[1][1]).toBe(5);

    // The return value of the first call to the function
    expect(mockSum.mock.results[0].value).toBe(10);

    // The return value of the second call to the function
    expect(mockSum.mock.results[1].value).toBe(13);

    // semantic alternative

    expect(mockSum).toHaveBeenCalled(); // trivial
    expect(mockSum).toHaveBeenCalledTimes(2);
    expect(mockSum).toHaveBeenCalledWith(3, 7);
    expect(mockSum).toHaveBeenCalledWith(8, 5);
  });
});
//
