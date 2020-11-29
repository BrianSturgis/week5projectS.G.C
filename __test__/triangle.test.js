import { TestScheduler } from 'jest';
import EarthAge from '../src/triangle.js';

describe('EarthAge', () => {

  test('should correctly create a Earthage object with three lengths', () => {
    const age = new EarthAge();
    expect(age.value).toEqual();
    expect(age.alienYears).toEqual([]);
    expect(age.life).toEqual([]);
    expect(age.pastLife).toEqual(0);
    expect(age.lifeLeft).toEqual(0);
  });
});