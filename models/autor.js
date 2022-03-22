const db = require('../util/database');
//const array_autores = [];
//const db = require('../util/database');

module.exports = class Autor {

    constructor(nuevo_nombre, nuevo_apellido) {
        this.nombre = nuevo_nombre;
        this.apellido = nuevo_apellido;
    }

    save() {
        return db.execute('INSERT INTO AUTOR (nombre, apellido) VALUES (?, ?)', 
            [this.nombre, this.apellido]);
    }
    
    static fetchAll() {
        return db.execute('SELECT * FROM AUTOR');
    }

    static edit(nombre, apellido, idautor) {
        return db.execute('UPDATE AUTOR SET nombre = ?, apellido = ? WHERE idAutor = ?', [nombre, apellido, idautor]);
    }

}