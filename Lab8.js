
function prom(num_array){
    let sum = 0;
    let prom = 0;
    for (let i = 0; i < num_array.length; i++){
        sum += num_array[i];
    }
    prom = sum/num_array.length;
    return prom;
}

let arreglo_num = [1,2,3,4];
console.log(prom(arreglo_num));

const filesystem = require('fs');

function write_string(my_string){
    filesystem.writeFileSync('new.txt', my_string);
}

let string_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let string_2 = "QWERTY";
write_string(string_1);

function area_poligono(longitud_lado,num_lados,apotema){
    let perimetro = 0;
    let area = 0;

    perimetro = longitud_lado*num_lados;
    area = perimetro*apotema/2;

    return area;

}

console.log(area_poligono(3,5,2.5));

const http = require('http');
let string_html = filesystem.readFileSync('Lab1_A01274803.html');

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(string_html);
    response.end();


});

server.listen(3000); 