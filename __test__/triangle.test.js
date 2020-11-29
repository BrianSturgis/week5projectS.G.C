import { TestScheduler } from 'jest';
import EarthAge from '../src/triangle.js';

describe('EarthAge', () => {
  

  test('should correctly create a Earthage object five key values', () => {
    const age = new EarthAge(70,[],[],0,0);
    expect(age.input).toEqual(70);
    expect(age.alienYears).toEqual([]);
    expect(age.lifeexp).toEqual([]);
    expect(age.pastLife).toEqual(0);
    expect(age.lifeLeft).toEqual(0);
  });
});
  test('shoulde create an array of input / array data', () => {
    const alien = new EarthAge
      expect(alien.alienAge()).toEqual();
  });
    