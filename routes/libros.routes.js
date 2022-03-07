const express = require('express');
const path = require('path');
const router = express.Router();

const array_autores = [];
const array_libros= [];

router.use('/libros/librosregistrados', (request, response, next) => {
    response.render('libros_reg', {array_libros:array_libros});
});

router.use('/autores/autoresregistrados', (request, response, next) => {
    response.render('autores_reg', {array_autores:array_autores});
});

router.get('/libros', (request, response, next) => {
    response.render('libros');
});

router.post('/libros', (request, response, next) => {
    array_libros.push(request.body.nombre1);
    response.render('libros_post.ejs');
});

router.get('/autores', (request, response, next) =>{
    response.render('autores');
});

router.post('/autores', (request, response, next) => {
    array_autores.push(request.body.nombre);
    response.render('autores_post');
});

router.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'menu_view.html'));
});

router.all('*',(request, response, next) => {
    console.log('404');
    response.status(404).render('error404_message');
});

module.exports = router;
