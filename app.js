const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_libros = require('./routes/libros.routes');

app.use('/registros', rutas_libros); 

app.use('*',(request, response, next) => {
    response.status(404);
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Error 404 | Not found </p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">La página que buscas no existe</h1>';
    response.send(codigo);
});

app.listen(3000);