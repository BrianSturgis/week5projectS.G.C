// eslint disable
export default class EarthAge {
constructor(userInput) {
  this.age = 70;
  this.pastLife = 0;
  this.lifeLeft = 0;
  this.alienYears = [];
  this.life = [];
}
  alienAge(){
  let array = [0.24, 0.62, 1.88, 11.86];
  for(let i = 0; i < array.length; i++) {
    this.alienYears.push(Math.round(this.age / array[i])); 
  }
  }
  // alienExpectancy(){
  // let array = [0.24, 0.62, 1.88, 11.86];
  // for(let i = 0; i < array.length; i++) {
  //   this.life.push(Math.round(this.pastLife / array[i] || this.lifeLeft / array[i]));
  // }
  // }
  // ageCheck(){
  // let ageLeft;
  // let agePast;
  // if (userInput == 73 ||userInput < 73) {
  //   ageLeft = 73 -userInput; 
  //   this.lifeLeft = ageLeft;
  // }else if (userInput > 73) {
  //   agePast = userInput - 73;
  //   this.pastLife = agePast;
  // }
  // }
}
  