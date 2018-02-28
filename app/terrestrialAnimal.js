import Animal from './animal';

const eyes = Symbol();
const habitat = Symbol();
const legs = Symbol();
const ears = Symbol();
const hasTail = Symbol();
const fins = Symbol();
const bodyType = Symbol();

//A terrestrial animal class that extends the Animal class
export default class TerrestrialAnimal extends Animal {
  constructor (name) {
    super (name);
    this[habitat] = 'Land';
    this[legs] = 2;
    this[ears] = 2;
  }

  get numOfLegs () {
    return this[legs];
  }

  set numOfLegs (number) {
    if (typeof number === 'number')
      this[legs] = number;
    else
      return `${number} is an invalid value for number of legs`;
  }

  get numOfEars () {
    return this[ears];
  }

  set numOfEars (number) {
    if (typeof number === 'number' && number < 3)
      this[ears] = number;
    else
      return `Common, ${number} is an invalid value for number of ears`;
  }

  doWalk () {
    return `Wawu...${this.name} is walking`;
  }
}