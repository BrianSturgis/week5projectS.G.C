export default class EarthAge {
  constructor(userInput) {
    this.age = userInput;
    this.pastLife = 0;
    this.lifeLeft = 0;
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
    let lifeEx = 73;
    if (this.age == lifeEx || this.age < lifeEx) {
      age = lifeEx - this.age;
      this.lifeLeft = age;
      alert(`Science says you have${age} years to live.`);
    }else if (this.age > lifeEx) {
      age = this.age - lifeEx;
      this.pastLife = age;
      alert(`Science says you have${age} years to live.`);
    }
  }
  alienExpectancy(){
    let array = [0.24, 0.62, 1.88, 11.86];
    for(let i = 0; i < array.length; i++) {
      this.life.push(Math.round(this.pastLife / array[i] || this.lifeLeft / array[i]));
    }
  }
} 
