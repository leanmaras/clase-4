import Animal from "./animal.js";

export default class Gato extends Animal {
    constructor(nombre, edad, raza) {
        super();
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    toString() {
        return this.nombre + " " + this.edad + " " + this.raza;
    }
}