const db = require('../util/database');
//const array_libros = [];

module.exports = class Libro {

    constructor(nuevo_nombre, nuevo_paginas) {
        this.nombre1 = nuevo_nombre;
        this.paginas = nuevo_paginas;
    }

    save() {
        //array_libros.push(this);
        return db.execute('INSERT INTO LIBRO (titulo, numPaginas) VALUES (?, ?)', 
            [this.nombre1, this.paginas]);
    }

    static fetchAll() {
        //return array_libros;
        return db.execute('SELECT * FROM LIBRO');
    }

    static fetchOne(palabras) {
        return db.execute('SELECT * FROM LIBRO WHERE LOWER(titulo) LIKE LOWER(?)', ['%' + palabras + '%']);
    }


}