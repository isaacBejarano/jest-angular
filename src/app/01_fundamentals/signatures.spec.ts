import { compute } from './signatures';

xdescribe('compute()', () => {
  // returned values
  describe('returns values', () => {
    it('1 if Arg is empty', () => {
      expect(compute(/* default is 0 */)).toBe(1);
    });

    it('0 if Arg is < 0', () => {
      expect(compute(-3)).toBe(0);
    });

    it('n++... if Arg is >= 0', () => {
      expect(compute(0)).toBe(1);
      expect(compute(1)).toBe(2);
    });
  });
});
