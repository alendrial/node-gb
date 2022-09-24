import { foundPrimeNums } from './primeNums';

describe('primeNums', () => {
  it('return [2, 3, 5, 7, 11, 13, 17, 19] for 20 argument', () => {
    expect(foundPrimeNums(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
