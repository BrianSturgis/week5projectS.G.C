import EarthAge from './../src/js/calc.js';

describe('EarthAge', () => {

    let earthAge;

    beforeEach(() => {
      earthAge = new EarthAge(70,3,3);
      // earthAge.ageCheck();
      earthAge.alienAge();
      // earthAge.lifeExpectancy();
      earthAge.ageCheck();
});
    test('Should create and instance of EarthAge', () => {
      expect(earthAge.age).toEqual(70); 
      expect(earthAge.pastLife).toEqual(3);
      expect(earthAge.lifeLeft).toEqual(3);
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
        expect(earthAge.alienYears[3]).toEqual(6);
  });

    test('should calculate 70 years into years left to live in Mercury years',() => {
        expect(earthAge.lifeLeft).toEqual(3);
  });
  test('should calculate 70 years into years left to live in Mercury years',() => {
    expect(earthAge.lifeLeft).toEqual(3);
    expect(earthAge.pastLife).toEqual(0);
});
  //   test('should calculate 70 years into years left to live in Venus years',() => {
  //       expect(earthAge.life[2]).toEqual(0);
  // });
  //   test('should calculate 70 years into years left to live in Mars years', () => {
  //       expect(earthAge.life[1]).toEqual(0);
  // });
  //   test('should calculate 70 years into years left to live in Mars years',() => {
  //       expect(earthAge.life[0]).toEqual(0);
  // });
//   // test('should create the difference of 70 vs 73',()  => 
//   // expect(this.lifeLeft).toEqual(03);
      
  
});    
