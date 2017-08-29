import { expect } from 'chai';
import { Animal, TerrestrialAnimal, AquaticAnimal } from '../app/index.js';

const dog = new TerrestrialAnimal('Bingo');
describe("Terrestrial Animal class for dog", () => {
    it(`should return 2 for dog.noOfEars()`, () => {
        expect(dog.numOfEars).to.equal(2);
    });

    it(`should return "I, ${dog.name}, am eating, and that's why I'm an Animal!" for dog.doEat()"`, () => {
        expect(dog.doEat()).to.equal(`I, ${dog.name}, am eating, and that's why I'm an Animal!`);
    });

    dog.hasTail = true;
    it(`should return "true" for dog.hasTail"`, () => {
        expect(dog.hasTail).to.equal(true);
    });
 });

const frog = new AquaticAnimal('African Frog');
describe("Aquatic Animal class for African Frog", () => {
    it(`should return "I'm swimming in the ${frog.habitat}" for frog.doSwim(${frog.habitat})`, () => {
        expect(frog.doSwim(frog.habitat)).to.equal(`I'm swimming in the ${frog.habitat}`);
    });

    it(`should return "No fins" for frog.fins`, () => {
        expect(frog.fins).to.equal('No fins');
    });

    it(`should return "streamlined" for dog.bodyType`, () => {
        expect(frog.bodyType).to.equal('streamlined');
    });
 });
