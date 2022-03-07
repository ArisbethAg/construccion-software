function potencias(){

	let num = prompt("Escribe un número: ");
	let res = "";

	document.getElementById("pot").innerHTML = "El número que ingresaste fue: <strong>" + num + "</strong>";

	for (let i = 1; i  <= num; i++){

		res += "<tr>"; 
		res += "<td>" + i + "</td>";
		res += "<td>" + i*i + "</td>";
		res += "<td>" + i*i*i + "</td></tr>";
	}

	return res;

}

document.getElementById("resultados").innerHTML = potencias();

function random_num(){
	let num1 = Math.floor(Math.random()*100);
	let num2 = Math.floor(Math.random()*100);

	let inicio_tiempo = new Date().getTime();
	let res = prompt("¿Cuál es el resultado de la suma de " + num1 + " + " + num2 + "?");
	let fin_tiempo = new Date().getTime();

	document.getElementById("operacion").innerHTML = "La operación fue: <strong>" + num1 + " + " + num2 + " </strong> <br> Y la respuesta que escribiste fue: <strong>" + res + "</strong>";


	if (num1 + num2 == res){
		document.getElementById("resultados2").innerHTML = "El resultado fue <strong> correcto </strong>";
	}
	else {
		document.getElementById("resultados2").innerHTML = "El resultado fue <strong> incorrecto </strong>";
	}

	let tiempo_total = fin_tiempo - inicio_tiempo;
	tiempo_total = tiempo_total/1000
	let print_tiempo = "Tardaste <strong>" + tiempo_total + "</strong> s en hacer la operación";

	return print_tiempo;
}

document.getElementById("resultados3").innerHTML = random_num();

function contador(num_array){

	let cont_neg = 0;
	let cont_cero = 0;
	let cont_pos = 0;

	document.getElementById("arreglo1").innerHTML = "El arreglo proporcionado fue: <strong>" + num_array + "</strong>";


	for (let i in num_array){
		if (num_array[i] < 0) {
			cont_neg ++;
		}
		else if (num_array[i] == 0){
			cont_cero ++;
		}
		else if (num_array[i] > 0){
			cont_pos ++;
		}
	}

	let res = "La cantidad de números negativos fue de: <strong>" + cont_neg + "</strong><br>" + "La cantidad de ceros fue de: <strong>" + cont_cero + "</strong><br>" + "La cantidad de números positivos fue de: <strong>" + cont_pos + "</strong>";
	return res;

}

const n_array = [1,2,3,0,0,-1,-2]
document.getElementById("resultados4").innerHTML = contador(n_array);

function promedios(array_of_arrays){

	let prom_array = [];
	let arrays = "<strong>";

	document.getElementById("texto").innerHTML = "El arreglo de arreglos fue el siguiente:"

	for (let i = 0; i < array_of_arrays.length; i++) {
		let prom = 0;
		arrays += "[";

		for (let j = 0; j < array_of_arrays[i].length; j++){
			prom += array_of_arrays[i][j];
			arrays += array_of_arrays[i][j].toString()

			if (j < (array_of_arrays[i].length)-1){
				arrays += ", ";
			}
			else {
				arrays += "]";
			}
		}

		prom = prom/array_of_arrays[i].length;
		prom_array[i] = prom;
		arrays += "<br>";
	}

	arrays += "</strong>";
	document.getElementById("arreglo2").innerHTML = arrays;
	return prom_array;
}

const array_arrays = [[12,12,12], [1,2,3,4,5], [8,7,9], [2,6,8]]
document.getElementById("resultados5").innerHTML = "Y el resultado de cada promedio fue de: <br> <strong>" + promedios(array_arrays) + "</strong>";

function inverso(num){

	document.getElementById("num-ingresado").innerHTML = "El número ingresado fue: <strong> " + num + "</strong>";

	let num_string = num.toString();
	let num_split = num_string.split("");
	let num_reverse = num_split.reverse();
	let reverse_str = num_reverse.join("");
	let reverse = Number(reverse_str);

	return reverse;
}

document.getElementById("resultados6").innerHTML = "Y el resultado fue: <strong>" + inverso(1825) + "</strong>";

class Cliente {
	constructor (email, nombre, edad){
		this.email = email;
		this.nombre = nombre;
		this.edad = edad;
		this.num_compras = 0;
		this.programa_lealtad = false;
	}

	ver_atributos_cliente(){
		document.getElementById("resultados7").innerHTML = "<strong>Función de ver atributos del cliente: </strong><br>El email del cliente es: <strong>" + this.email + "</strong><br> Su nombre es: <strong>" +  this.nombre + "</strong><br> Su edad es: <strong>" + this.edad + "</strong><br> Su número de compras acumuladas: <strong>" + this.num_compras + "</strong><br> Y estatus en programa de lealtad: <strong>" + this.programa_lealtad + "</strong>" ;
	}

	registrar_compra(){
		this.num_compras += 1;
		document.getElementById("resultados8").innerHTML = "<strong>Función de registrar compra: </strong><br>Se ha registrado compra. El usuario tiene " + this.num_compras + " compras acumuladas." ;
	}

	agregar_programa_lealtad(){
		this.programa_lealtad = true;
		document.getElementById("resultados8").innerHTML = "<strong>Función de agregar a programa de lealtad: </strong><br>El usuario ha sido agregado al programa de lealtad.";
	}

	reiniciar_num_compras(){
		this.num_compras = 0;
		document.getElementById("resultados10").innerHTML = "<strong>Función de reiniciar_num_compras: </strong><br>El número de compras ha sido reiniciado.";
	}
}

const nuevo_cliente = new Cliente("aris@gmail.com", "Aris", 20);

nuevo_cliente.ver_atributos_cliente();
nuevo_cliente.agregar_programa_lealtad();
nuevo_cliente.registrar_compra();
nuevo_cliente.reiniciar_num_compras();