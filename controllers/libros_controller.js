const path = require('path');
const Autor = require('../models/autor');
const Libro = require('../models/libro');
const db = require('../util/database');


exports.modificarautor  = (request, response, next) => {
    response.render('modificarautor', 
    {username: request.session.username ? request.session.username : ''});
};

exports.modificarautor_post  = (request, response, next) => {
    Autor.edit(request.body.nombreautor,request.body.apellidoautor, request.body.idautor)
    .then(()=>{
        response.render('modificarautor_post', 
        {username: request.session.username ? request.session.username : ''});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.buscarlibro  = (request, response, next) => {
    response.render('buscarlibro', 
    {username: request.session.username ? request.session.username : ''});
};

exports.buscarlibro_post  = (request, response, next) => {
    Libro.fetchOne(request.body.palabras)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('buscarlibro_post', {
                libros: rows, 
                username: request.session.username ? request.session.username : ''});
        })
        .catch(err => {
            console.log(err);
        });
};

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
    libro.save()
    .then(()=>{
        response.setHeader('Set-Cookie', ['ultimo_libro='+libro.nombre1+'; HttpOnly', 'ultima_pagina='+libro.paginas+'; HttpOnly']);
        response.render('libros_post', 
    {   username: request.session.username ? request.session.username : ''});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.libros_registrados  = (request, response, next) => {
    Libro.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('libros_reg', {
                libros: rows, 
                ultimo_libro: request.cookies.ultimo_libro ? request.cookies.ultimo_libro : '' ,
                ultima_pagina: request.cookies.ultima_pagina ? request.cookies.ultima_pagina : '',
                username: request.session.username ? request.session.username : ''});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.get_autores = (request, response, next) => {
    response.render('autores', 
    {username: request.session.username ? request.session.username : ''});
};

exports.post_autores = (request, response, next) => {
    const autor = new Autor(request.body.nombre, request.body.apellido);
    autor.save()
    .then(()=>{
        response.setHeader('Set-Cookie', 'ultimo_autor='+autor.nombre+' '+autor.apellido+'; HttpOnly');
        response.render('autores_post', 
        {username: request.session.username ? request.session.username : ''});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.recomendaciones  = (request, response, next) => {
    Libro.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.render('recomendaciones', {
            libros: rows, 
            username: request.session.username ? request.session.username : ''});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.autores_registrados  = (request, response, next) => {
    Autor.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('autores_reg', {
                autores: rows,
                ultimo_autor: request.cookies.ultimo_autor ? request.cookies.ultimo_autor : '', 
                username: request.session.username ? request.session.username : ''});
            })
        .catch(err => {
            console.log(err);
        });
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