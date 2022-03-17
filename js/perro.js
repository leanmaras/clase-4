import Animal from "./animal.js";

export default class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    ladrar() {
        return `${this.name} esta ladrando`;
    }
}