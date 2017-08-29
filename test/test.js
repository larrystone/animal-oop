import { expect } from 'chai';
import { Animal, TerrestrialAnimal, AquaticAnimal } from '../app/index.js';

const dog = new TerrestrialAnimal('Bingo');
describe("Terrestrial Animal class for dog", () => {
    it(`should return 2 for dog.noOfEars()`, () => {
        expect(dog.numOfEars()).to.equal(2);
    });

    it(`should return "I, ${dog.name}, am eating, and that's why I'm an Animal! for dog.doEat()"`, () => {
        expect(dog.doEat()).to.equal(`I, ${dog.name}, am eating, and that's why I'm an Animal!`);
    });
 });
