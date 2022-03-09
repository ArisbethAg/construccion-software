const path = require('path');
const Autor = require('../models/autor');
const Libro = require('../models/libro');

exports.preguntas  = (request, response, next) => {
    response.render('preguntas');
};

exports.recomendaciones  = (request, response, next) => {
    response.render('recomendaciones', {array_autores: Autor.fetchAll(), array_libros: Libro.fetchAll()});
};

exports.get_libros  = (request, response, next) => {
    response.render('libros');
};

exports.post_libros  = (request, response, next) => {
    const libro = new Libro(request.body.nombre1)
    libro.save();
    response.render('libros_post');
};

exports.libros_registrados  = (request, response, next) => {
    response.render('libros_reg', {array_libros: Libro.fetchAll()});
};

exports.get_autores = (request, response, next) => {
    response.render('autores');
};

exports.post_autores = (request, response, next) => {
    const autor = new Autor(request.body.nombre);
    autor.save();
    response.render('autores_post');
};

exports.autores_registrados  = (request, response, next) => {
    response.render('autores_reg', {array_autores: Autor.fetchAll()});
};

exports.menu  = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'menu_view.html'));
};

exports.error  = (request, response, next) => {
    console.log('404');
    response.status(404).render('error404_message');
};