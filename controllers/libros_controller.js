const path = require('path');
const Autor = require('../models/autor');
const Libro = require('../models/libro');

exports.preguntas  = (request, response, next) => {
    response.render('preguntas', 
    {username: request.session.username ? request.session.username : ''});
};

exports.get_libros  = (request, response, next) => {
    response.render('libros', 
    {username: request.session.username ? request.session.username : ''});
};

exports.post_libros  = (request, response, next) => {
    const libro = new Libro(request.body.nombre1, request.body.paginas);
    libro.save();
    response.setHeader('Set-Cookie', ['ultimo_libro='+libro.nombre1+'; HttpOnly', 'ultima_pagina='+libro.paginas+'; HttpOnly']);
    response.render('libros_post', 
    {username: request.session.username ? request.session.username : ''});
};

exports.libros_registrados  = (request, response, next) => {
    response.render('libros_reg', {
        array_libros: Libro.fetchAll(), 
        ultimo_libro: request.cookies.ultimo_libro ? request.cookies.ultimo_libro : '' ,
        ultima_pagina: request.cookies.ultima_pagina ? request.cookies.ultima_pagina : '',
        username: request.session.username ? request.session.username : ''});
};

exports.get_autores = (request, response, next) => {
    response.render('autores', 
    {username: request.session.username ? request.session.username : ''});
};

exports.post_autores = (request, response, next) => {
    const autor = new Autor(request.body.nombre);
    autor.save();
    response.setHeader('Set-Cookie', 'ultimo_autor='+autor.nombre+'; HttpOnly');
    response.render('autores_post', 
    {username: request.session.username ? request.session.username : ''});
};

exports.recomendaciones  = (request, response, next) => {
    response.render('recomendaciones', 
    {array_autores: Autor.fetchAll(), 
    array_libros: Libro.fetchAll(),
    username: request.session.username ? request.session.username : ''});
};

exports.autores_registrados  = (request, response, next) => {
    response.render('autores_reg', {
        array_autores: Autor.fetchAll(),
        ultimo_autor: request.cookies.ultimo_autor ? request.cookies.ultimo_autor : '', 
        username: request.session.username ? request.session.username : ''});
};

exports.menu  = (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'menu_view.html'));
    response.render('menu', {
        username: request.session.username ? request.session.username : ''
    });
};

exports.error  = (request, response, next) => {
    console.log('404');
    response.status(404).render('error404_message');
};