import { TestScheduler } from 'jest';
import EarthAge from '../src/triangle.js';

describe('EarthAge', () => {

  test('should correctly create a Earthage object with three lengths', () => {
    const age = new EarthAge(0,[],[],0,0);
    expect(age.input).toEqual(0);
    expect(age.alienYears).toEqual([]);
    expect(age.lifeexp).toEqual([]);
    expect(age.pastLife).toEqual(0);
    expect(age.lifeLeft).toEqual(0);
  });
});

