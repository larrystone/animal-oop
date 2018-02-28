const eyes = Symbol();
const habitat = Symbol();
const legs = Symbol();
const hasTail = Symbol();

//A class to model the concepts of OOP using Animal class (with Terrestrial and Aquatic subclasses)
export default class Animal {
  constructor (name) {
    this.name = name;
    this[eyes] = 2;
    this[habitat] = undefined;
    this[hasTail] = false;
  }

  get numOfEyes () {
    return this[eyes];
  }

  get habitat () {
    return this[habitat] || "N/A";
  }

  set habitat (place) {
    this[habitat] = place.strip();
  }

  get hasTail () {
    return this[hasTail];
  }

  set hasTail (value) {
    if (typeof value === 'boolean')
      this[hasTail] = value;
    else
      return `${valid} is an invalid value for hasTail`;
  }

  doEat () {
    return `I, ${this.name}, am eating, and that's why I'm an Animal!`;
  }
}