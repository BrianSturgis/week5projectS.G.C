
export default class EarthAge {
constructor(age,pastLife,lifeLeft) {
  this.age = age;
  this.pastLife = pastLife;
  this.lifeLeft = lifeLeft;
  this.alienYears = [];
  this.life = [];
}
  alienAge(){
  let array = [0.24, 0.62, 1.88, 11.86];
  for(let i = 0; i < array.length; i++) {
    this.alienYears.push(Math.round(this.age / array[i])); 
  }
  }
  alienExpectancy(){
  let array = [0.24, 0.62, 1.88, 11.86];
  for(let i = 0; i < array.length; i++) {
    this.life.push(Math.round(this.pastLife / array[i] || this.lifeLeft / array[i]));
  }
  }
  ageCheck(){
  let ageLeft;
  let agePast;
  if (this.age == 73 || this.age < 73) {
    ageLeft = 73 - this.age; 
    this.lifeLeft = ageLeft;
  }else if (this.age > 73) {
    agePast = this.age - 73;
    this.pastLife = agePast;
  }
  }
}
