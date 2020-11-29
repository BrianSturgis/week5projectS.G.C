


export default class Earthage {
  constructor() {
    this.input = userInput;
    this.alienYears = [];
    this.lifeexp = [];
    this.pastLife = 0;
    this.lifeLeft = 0;
  }
  alienAge(){
    let array = [0.24, 0.62, 1.88, 11.86];
    for(let i = 0; i < array.length; i++) {
      this.alienYears.push(Math.round(userInput / array[i]));
    }
  }

}







let userInput = 70;

let joe = new Earthage();
// joe.ageCheck();
joe.alienAge();
// // joe.alienExpectancy();

console.log(joe);