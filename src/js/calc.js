
export default class EarthAge {
  constructor(userInput, pastLife,lifeLeft) {
    this.age = userInput;
    this.pastLife = pastLife;
    this.lifeLeft = lifeLeft;
    this.alienYears = [];
    this.life = [];
  }
  alienAge(){
    let array = [0.24, 0.62, 1.88, 11.86];
    for(let i = 0; i < array.length; i++) {
      this.alienYears.push(Math.round(this.age  / array[i]));
    }
  }
  ageCheck(){
    let age;
    if (this.age == 73 || this.age < 73) {
      age = 73 - this.age;
      this.lifeLeft = age;
    }else if (this.age > 73) {
      age = this.age - 73;
      this.pastLife = age;
    }
  }
  alienExpectancy(){
    let array = [0.24, 0.62, 1.88, 11.86];
    for(let i = 0; i < array.length; i++) {
      this.life.push(Math.round(this.pastLife / array[i] || this.lifeLeft / array[i]));
    }
  }
  } 
