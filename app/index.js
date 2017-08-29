const eyes = Symbol();
const habitat = Symbol();
const legs = Symbol();
const ears = Symbol();
const hasTail = Symbol();
const fins = Symbol();
const bodyType = Symbol();

//A class to model the concepts of OOP using Animal class (with Terrestrial and Aquatic subclasses)
export class Animal {
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
      console.log(`${valid} is an invalid value for hasTail`);
  }

  doEat () {
    console.log(`I, ${this.name}, am eating, and that's why I'm an Animal!`);
  }
}

//A terrestrial animal class that extends the Animal class
export class TerrestrialAnimal extends Animal {
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
      console.log(`${number} is an invalid value for number of legs`);
  }

  get numOfEars () {
    return this[ears];
  }

  set numOfEars (number) {
    if (typeof number === 'number' && number < 3)
      this[ears] = number;
    else
      console.log(`Common, ${number} is an invalid value for number of ears`);
  }

  doWalk () {
    console.log(`Wawu...${this.name} is walking`);
  }

}


//Aquatic animal class that extends the Animal class
export class AquaticAnimal extends Animal {
  constructor (name) {
    super (name);
    this[habitat] = 'Water';
    this[fins] = undefined;
    this[bodyType] = 'streamlined';
  }

  get fins () {
    return this[fins] || 'No fins';
  }

  set fins (value) {
    if (value) 
      this[fins] = value;
  }

  get bodyType () {
    return this[bodyType];
  }

  doSwim (where) {
    console.log(`I'm swimming in the ${where}`);
  }
}