import { dateParce /* renderDate */ } from './timer';
import { checkNum } from '../../functions';
describe('timer', () => {
  it('return "01 01 2020 00:00:00" for "01-01-2020"', () => {
    expect(dateParce('01-01-2020')).toBe('01 01 2020 00:00:00');
  });
  it('return "Неверный формат даты" for "01012020"', () => {
    console.log = jest.fn();
    dateParce('01012020');
    expect(console.log).toHaveBeenCalledWith(
      'Вы ввели неверный формат даты'.bgRed,
    );
  });
  it('return "03" for 3', () => {
    expect(checkNum(3)).toBe('03');
  });
});
