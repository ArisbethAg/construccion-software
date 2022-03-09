const array_libros = [];

module.exports = class Libro {

    constructor(nuevo_nombre) {
        this.nombre1 = nuevo_nombre;
    }

    save() {
        array_libros.push(this);
    }

    static fetchAll() {
        return array_libros;
    }

}