import { from, take } from 'rxjs';

const subs$ = from([1, 2, 3, 4, 5]);

describe('JEST can assert RxJs', () => {
  it('Observables are async', () => {
    // subs$.subscribe((o) => {
    //   expect(o).toEqual(3);
    // });
  });
});

// FIXME: https://www.youtube.com/watch?v=s9FY-MBW1rc