let num_obj = 0;

document.getElementById("password1").oninput = () => {
	let pass = document.getElementById("password1").value;
	let texto = document.getElementById("texto");
	let texto1 = document.getElementById("texto1");
	let texto2 = document.getElementById("texto2");
	let texto3 = document.getElementById("texto3");
	let min = 0;
	let may = 0;
	let num  = 0;
	
	texto.innerHTML = "";
	texto1.innerHTML = "";
	texto2.innerHTML = "";
	texto3.innerHTML = "";
	
	if (pass.length < 8){
		//console.log(pass);
		texto.innerHTML = "Tu contraseña debe tener al menos 8 caracteres";
	}

	for (let i in pass) {
		if ( pass[i] === pass[i].toLowerCase() && pass[i] != Number(pass[i])){
			min += 1;
		}
		else if(pass[i] === pass[i].toUpperCase() && pass[i] != Number(pass[i])){
			may += 1;
		}
		else if (pass[i] == Number(pass[i])){
			num += 1;
		}
	}

	if (min == 0){
		texto1.innerHTML = "Tu contraseña debe tener al menos una minúscula";
	}
	if (may == 0){
		texto2.innerHTML = "Tu contraseña debe tener al menos una mayúscula";
	}
	if (num == 0){
		texto3.innerHTML = "Tu contraseña debe tener al menos un número";
	}

}

document.getElementById("password1").onchange;
document.getElementById("password2").onchange;

document.getElementById("checar").onclick = () => {

	let pass = document.getElementById("password1").value;
	let pass2 = document.getElementById("password2").value;

	let text2 = document.getElementById("texto-2");

	if (pass == pass2){
		return text2.innerHTML = '<p id="texto-2" class="help is-success"> Contraseña correcta </p>';
	}
	else {
		return text2.innerHTML = '<p id="texto-2" class="help is-danger"> La contraseña es incorrecta. </p>';
	}

}

function get_precio(precio, cantidad){
	let precio_u = precio*cantidad;
	return precio_u;	
}

function get_iva(precio){
	let precio_i = precio*0.16;
	return precio_i;	
}

function get_total(precio, cantidad){
	let precio_u = precio*cantidad;
	let total = precio_u + precio_u*0.16 ;
	return total;	
}

document.getElementById("cantidad1").onchange = () =>
{
	let prec = 200;
	let cant = document.getElementById("cantidad1").value;

	if (cant < 0){
		prec = 0;
		cant = 0;
	}
	
	document.getElementById("actprecio1").innerHTML = "Precio: $" + get_precio(prec, cant) + " + iva: $" + get_iva(prec);
	document.getElementById("totalprecio1").innerHTML = "Total: $" + get_total(prec, cant);
}

document.getElementById("cantidad2").onchange = () =>
{
	let prec = 150;
	let cant = document.getElementById("cantidad2").value;

	if (cant < 0){
		prec = 0;
		cant = 0;
	}

	document.getElementById("actprecio2").innerHTML = "Precio: $" + get_precio(prec, cant) + " + iva: $" + get_iva(prec);
	document.getElementById("totalprecio2").innerHTML = "Total: $" + get_total(prec, cant);
}

document.getElementById("cantidad3").onchange = () =>
{
	let prec = 60;
	let cant = document.getElementById("cantidad3").value;

	if (cant < 0){
		prec = 0;
		cant = 0;
	}
	
	document.getElementById("actprecio3").innerHTML = "Precio: $" + get_precio(prec, cant) + " + iva: $" + get_iva(prec);
	document.getElementById("totalprecio3").innerHTML = "Total: $" + get_total(prec, cant);
}

document.getElementById("add1").onclick = () =>{
	num_obj += Number(document.getElementById("cantidad1").value);
	document.getElementById("obj").innerHTML = num_obj;
}

document.getElementById("add2").onclick = () =>{
	num_obj += Number(document.getElementById("cantidad2").value);
	document.getElementById("obj").innerHTML = num_obj;
}

document.getElementById("add3").onclick = () =>{
	num_obj += Number(document.getElementById("cantidad3").value);
	document.getElementById("obj").innerHTML = num_obj;
}


document.getElementById("titulo").onmousemove = () =>{
	document.getElementById("titulo").className = "title is-underlined";
}

document.getElementById("change").onmousemove = () =>{
	document.getElementById("titulo").className = "title";
}

document.getElementById("prueba").style.visibility = "hidden";

document.getElementById("plumas").onmouseover = () =>{
	document.getElementById("prueba").style.visibility = "visible";
}

document.getElementById("borrar").onclick = () =>{
	document.getElementById("prueba").style.visibility = "hidden";
}