import Persona from "./persona.js";
import Perro from "./perro.js";
import Gato from "./gato.js";
import Animal from "./animal.js";

let myPerson = new Persona ('juan', 'perez', 23, 1.8);
let myPerro = new Perro ('firulais', 'chihuahua', 2);
let myGato = new Gato ('lucas', 3, 'siames');

console.log(myPerson.saludar2());
console.log(myPerro.ladrar());
console.log(myPerro.speak());
console.log(myGato.toString());