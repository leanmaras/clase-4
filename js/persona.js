export default class Persona {
    constructor (nombre, apellido, edad, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
    }
    
    saludar () {
        return 'hola soy ' + this.nombre + ' ' + this.apellido;
    }

    saludar2 () {
        return `hola soy  ${this.nombre}  ${this.apellido}`;
    }

    soyAlto () {
        return this.altura > 1.8;
    }
}