const array_libros = [];

module.exports = class Libro {

    constructor(nuevo_nombre, nuevo_paginas) {
        this.nombre1 = nuevo_nombre;
        this.paginas = nuevo_paginas;
    }

    save() {
        array_libros.push(this);
    }

    static fetchAll() {
        return array_libros;
    }

}