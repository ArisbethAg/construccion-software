const filesystem = require('fs');
const http = require('http');
let string_html = filesystem.readFileSync('Lab6.html');
const array_autores = [];
const array_libros= [];

const server = http.createServer( (request, response) => {

    if (request.url === '/' && request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
        response.write('<title>Laboratorio 10</title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
        response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
        response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Registrar Libros</p></div></section>');
        response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
        response.write('<h1 class="title is-centered">Registro de Libros</h1><div class="field"><form action="/" method="POST"><label for="nombre1" id="nombre1" name="nombre1" class="label">Nombre del libro</label><div class="control"><input class="input is-warning" id="nombre1" name="nombre1" type="text" placeholder="Introduce el título del libro"></div></div>')
        response.write('<div class="block"></div><div class="block"></div><button id="checar" class="button is-warning">Registrar</button></form><div class="block"></div>')
        response.end();
    } 

    else if (request.url === '/' && request.method === 'POST'){
        const libros = [];

        request.on('data', (libro) => {
            console.log(libro);
            libros.push(libro);
        });

        return request.on('end', () => {

            const titulo_completo = Buffer.concat(libros).toString();
            console.log(titulo_completo);
            const titulo_nuevo = titulo_completo.split('=')[1];
            const titulo_n = titulo_nuevo.replace('+', ' ');
            array_libros.push(titulo_n);
            console.log(array_libros);

            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
            response.write('<title>Laboratorio 10</title>');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
            response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
            response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Registro exitoso de libro</p></div></section>');
            response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
            response.write('<h1 class="title is-centered">Estado de Registro: </h1><div>"El registro fue exitoso"</div><br>');
            response.write('<a href="/librosregistrados">Ver lista de libros registrados</a><br>');
            response.write('<a href="/autoresregistrados">Ver lista de autores registrados</a>');
            filesystem.writeFileSync('hola.txt',array_autores.toString());
            return response.end();
        });
    }

    else if (request.url === '/autores' && request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
        response.write('<title>Laboratorio 10</title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
        response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
        response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Registra Autores</p></div></section>');
        response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
        response.write('<h1 class="title is-centered">Registro de Autores</h1><div class="field"><form action="autores" method="POST"><label for="nombre" id="nombre" name="nombre" class="label">Autor</label><div class="control"><input class="input is-warning" id="nombre" name="nombre" type="text" placeholder="Introduce el nombre del autor"></div></div>')
        response.write('<div class="block"></div><div class="block"></div><button id="checar" class="button is-warning">Registrar</button></form><div class="block"></div>')
        response.end();
    } 

    else if (request.url === '/autores' && request.method === 'POST'){
        const autores = [];

        request.on('data', (autor) => {
            console.log(autor);
            autores.push(autor);
        });

        return request.on('end', () => {
            console.log(autores);
            console.log("hola");

            const nombre_completo = Buffer.concat(autores).toString();
            console.log(nombre_completo);
            const nombre_nuevo = nombre_completo.split('=')[1];
            const nombre_n = nombre_nuevo.replace('+', ' ');
            array_autores.push(nombre_n);
            console.log(array_autores);

            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
            response.write('<title>Laboratorio 10</title>');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
            response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
            response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Registro exitoso de autor</p></div></section>');
            response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
            response.write('<h1 class="title is-centered">Estado de Registro: </h1><div>"El registro fue exitoso"</div><br>');
            response.write('<a href="/librosregistrados">Ver lista de libros registrados</a><br>');
            response.write('<a href="/autoresregistrados">Ver lista de autores registrados</a>');
            return response.end();
        });
        }

    else if(request.url === '/autoresregistrados'){

        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
        response.write('<title>Laboratorio 10</title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
        response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
        response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Autores registrados</p></div></section>');
        response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
        response.write('<h1 class="title is-centered">Lista de Autores registrados: </h1>');

        for (let i = 0; i < array_autores.length; i++){
            response.write('<li>' + array_autores[i]  + '</li>');
        }
        response.write('<br><a href="/librosregistrados">Ver lista de libros registrados</a><br><br>');
        response.write('<a href="/">Registrar libros</a><br>');
        response.write('<a href="/autores">Registrar autores</a>');
        response.end();
    } 
      
    else if(request.url === '/librosregistrados'){

        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
        response.write('<title>Laboratorio 10</title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
        response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
        response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Libros registrados</p></div></section>');
        response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
        response.write('<h1 class="title is-centered">Lista de Libros registrados: </h1>');

        for (let i = 0; i < array_libros.length; i++){
            response.write('<li>' + array_libros[i]  + '</li>');
        }
        response.write('<br><a href="/autoresregistrados">Ver lista de autores registrados</a><br><br>');
        response.write('<a href="/">Registrar libros</a><br>');
        response.write('<a href="/autores">Registrar autores</a>');
        response.end();

    } 

    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1"></meta>');
        response.write('<title>Laboratorio 10</title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">');
        response.write('<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>');
        response.write('<body><section class="hero is-warning"><div class="hero-body"><p class="title">Error 404 | Not found </p></div></section>');
        response.write('<div class="container"><div class="columns is-mobile is-centered"><div class="column is-half"><div class="block"></div><div class="box">');
        response.write('<h1 class="title is-centered">La página que buscas no existe</h1>');
        response.end();
    }

});

server.listen(3000);

