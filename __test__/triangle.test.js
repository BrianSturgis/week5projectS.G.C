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
 test('should create array in this.life of the Earthage object', () => {
    const array = new Earthage([0.24, 0.62, 1.88, 11.86]);
    expect(array.alienYears).toEqual([0.24, 0.62, 1.88, 11.86]);
}); 

