import EarthAge from './../src/js/calc.js';

describe('EarthAge', () => {
    let earthAge;
    beforeEach(() => {
      earthAge = new EarthAge(70,0,3);
      earthAge.alienAge();
      earthAge.ageCheck();
      earthAge.alienExpectancy();
});
    test('Should create and instance of EarthAge', () => {
      expect(earthAge.age).toEqual(70); 
      expect(earthAge.pastLife).toEqual(0);
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
    test('should calculate the difference of 70 and 73',() => {
      expect(earthAge.pastLife).toEqual(0);  
      expect(earthAge.lifeLeft).toEqual(3);
  });
    test('should calculate 3 years into Mercury years',() => {
      expect(earthAge.life[0]).toEqual(13);
});
    test('should calculate 3 years into Venus years',() => {
        expect(earthAge.life[1]).toEqual(5);
  });
    test('should calculate 3 years into Mars years',() => {
      expect(earthAge.life[2]).toEqual(2); 
});
    test('should calculate 3 years into Mars years',() => {
      expect(earthAge.life[3]).toEqual(0); 
}); 
    test('',() => {
      let overEarthAge = new EarthAge (76,3,0);
      overEarthAge.alienAge();
      overEarthAge.ageCheck();
      overEarthAge.alienExpectancy();
      expect(overEarthAge.pastLife).toEqual(3);  
      expect(overEarthAge.lifeLeft).toEqual(0);
});
    test('',() => {
      let overEarthAge = new EarthAge (76,3,0)
      earthAge.alienAge();
      overEarthAge.ageCheck();
      overEarthAge.alienExpectancy();
      expect(overEarthAge.life[3]).toEqual(0); 
  });
    test('',() => {
      let overEarthAge = new EarthAge (76,3,0)
      earthAge.alienAge();
      overEarthAge.ageCheck();
      overEarthAge.alienExpectancy();
      expect(overEarthAge.life[2]).toEqual(2); 
});
    test('',() => {
      let overEarthAge = new EarthAge (76,3,0)
      overEarthAge.alienAge();
      overEarthAge.ageCheck();
      overEarthAge.alienExpectancy();
      expect(overEarthAge.life[1]).toEqual(5); 
});
    test('',() => {
      let overEarthAge = new EarthAge (76,3,0)
      overEarthAge.alienAge();
      overEarthAge.ageCheck();
      overEarthAge.alienExpectancy();
      expect(overEarthAge.life[0]).toEqual(5); 
});
});    
