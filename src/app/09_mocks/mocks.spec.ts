const mockCalculator = jest.fn((x: number, y: number): number => x + y);
// NOTICE: we need to copy (mock) the original function instructions

describe('JEST mocks functions', () => {
  it('"mock" property members --> calls / results', () => {
    // calls
		mockCalculator(3, 7); // calls[0] => results[0]
    mockCalculator(8, 5); // calls[1] => results[1]

    // The mock function is called twice
    expect(mockCalculator.mock.calls.length).toBe(2);

    // The first argument of the first call to the function
    expect(mockCalculator.mock.calls[0][0]).toBe(3);

    // The second argument of the first call to the function
    expect(mockCalculator.mock.calls[0][1]).toBe(7);

    // The first argument of the second call to the function
    expect(mockCalculator.mock.calls[1][0]).toBe(8);
    
		// The second argument of the second call to the function
    expect(mockCalculator.mock.calls[1][1]).toBe(5);

    // The return value of the first call to the function
    expect(mockCalculator.mock.results[0].value).toBe(10);

    // The return value of the second call to the function
    expect(mockCalculator.mock.results[1].value).toBe(13);
  });
});