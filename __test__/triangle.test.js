

import EarthAge from '../js/triangle.js';

describe('EarthAge', () => {

  let earthAge;

    beforeEach(() => {
      earthAge = new EarthAge(70,[],[],0,0);
      earthAge.alienAge();
      earthAge.alienExpectancy();

  });
  
  test('Should create and instance of EarthAge', () => {
    expect(earthAge.value).toEqual(70);
    expect(earthAge.pastLife).toEqual(0);
    expect(earthAge.lifeLeft).toEqual(0);
});
  test('should calculate 70 years into Mercury years', () => {
      expect(earthAge.alienYears[0]).toEqual(292);
});
  test('should calculate 70 years into Venus years', () => {
      expect(earthAge.alienYears[1]).toEqual(113);
});
  test('should calculate 70 years into Mars years', () => {
      expect(earthAge.alienYears[2]).toEqual(37);
});
    test('should calculate 70 years into jupiter years',() => {

    });




});