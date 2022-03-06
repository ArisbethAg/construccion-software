const express = require('express');
const router = express.Router();
const filesystem = require('fs');

const array_autores = [];
const array_libros= [];

router.use('/libros/librosregistrados', (request, response, next) => {
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Libros registrados</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Lista de Libros registrados: </h1>';

        for (let i = 0; i < array_libros.length; i++){
            codigo += '<li>' + array_libros[i]  + '</li>';
        }
    codigo += '<br><a href="/registros/autores/autoresregistrados">Ver lista de autores registrados</a><br><br><a href="/registros">Registrar libros y/o autores</a>';
    response.send(codigo);
});

router.use('/autores/autoresregistrados', (request, response, next) => {
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Autores registrados</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Lista de Autores registrados: </h1>';

    for (let i = 0; i < array_autores.length; i++){
        codigo +='<li>' + array_autores[i]  + '</li>';
    }
    codigo += '<br><a href="/registros/libros/librosregistrados">Ver lista de libros registrados</a><br><br><a href="/registros">Registrar libros y/o autores</a>';
    response.send(codigo);
});

router.get('/libros', (request, response, next) => {
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Registrar Libros</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Registro de Libros</h1><div class="field"><form action="/registros/libros" method="POST"><label for="nombre1" id="nombre1" name="nombre1" class="label">Nombre del libro</label><div class="control"><input class="input is-warning" id="nombre1" name="nombre1" type="text" placeholder="Introduce el título del libro"></div></div><div class="block"></div><div class="block"></div><button id="checar" class="button is-warning">Registrar</button></form><div class="block"></div>';
    response.send(codigo);
});

router.post('/libros', (request, response, next) => {
    array_libros.push(request.body.nombre1);
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Registro exitoso de libro</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Estado de Registro: </h1><div>"El registro fue exitoso"</div><br><a href="/registros/libros/librosregistrados">Ver lista de libros registrados</a><br><a href="/registros/autores/autoresregistrados">Ver lista de autores registrados</a>';
    response.send(codigo);
});

router.get('/autores', (request, response, next) =>{
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Registra Autores</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Registro de Autores</h1><div class="field"><form action="/registros/autores" method="POST"><label for="nombre" id="nombre" name="nombre" class="label">Autor</label><div class="control"><input class="input is-warning" id="nombre" name="nombre" type="text" placeholder="Introduce el nombre del autor"></div></div><div class="block"></div><div class="block"></div><button id="checar" class="button is-warning">Registrar</button></form><div class="block"></div>';
    response.send(codigo);
});

router.post('/autores', (request, response, next) => {
    array_autores.push(request.body.nombre);
    filesystem.writeFileSync('autores.txt',array_autores.toString());
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Registro exitoso de autor</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Estado de Registro: </h1><div>"El registro fue exitoso"</div><br><a href="/registros/libros/librosregistrados">Ver lista de libros registrados</a><br><a href="/registros/autores/autoresregistrados">Ver lista de autores registrados</a>';
    response.send(codigo);
});

router.use('/', (request, response, next) => {
    let seleccion = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Registrar Libros y Autores</p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">Registro de Libros y Autores</h1><div class="field"><form><label class="label">Selecciona lo que desees registrar:</label><div class="control"></div></div><div class="block"></div><div class="block"></div><a href="/registros/libros">Registrar libros</a><br><div class="block"></div><a href="/registros/autores">Registrar autores </a><br></form><div class="block"></div>';
    seleccion += '<br><div class="block"></div><strong>Descripción del archivo package.json: </strong><br><div> El archivo package.json es la base de los proyectos en node, en el se encuentra algunas de las características principales de nuestro prroyecto como el nombre, autor, repositorio, licencia, así como las dependencias y paquetes instalados para el mismo.</div>';
    response.send(seleccion);
});

router.all('*',(request, response, next) => {
    console.log('404');
    let codigo = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></meta><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><section class="hero is-warning"><div class="hero-body"><p class="title">Error 404 | Not found </p></div></section><div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box"><h1 class="title is-centered">La página que buscas no existe</h1>';
    response.status(404).send(codigo);
});

module.exports = router;
