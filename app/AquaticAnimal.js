import Animal from './animal';

const eyes = Symbol();
const habitat = Symbol();
const legs = Symbol();
const ears = Symbol();
const hasTail = Symbol();
const fins = Symbol();
const bodyType = Symbol();

//Aquatic animal class that extends the Animal class
export default class AquaticAnimal extends Animal {
  constructor(name) {
    super(name);
    this[habitat] = 'Water';
    this[fins] = undefined;
    this[bodyType] = 'streamlined';
  }

  get fins() {
    return this[fins] || 'No fins';
  }

  set fins(value) {
    if (value)
      this[fins] = value;
  }

  get bodyType() {
    return this[bodyType];
  }

  doEat() {
    return `${this.name} eat, but not like other animals do!`;
  }

  doSwim(where) {
    return `I'm swimming in the ${where}`;
  }
}