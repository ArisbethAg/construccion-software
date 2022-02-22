
document.getElementById("password1").onchange;
document.getElementById("password2").onchange;


document.getElementById("checar").onclick = () => {

	let pass = document.getElementById("password1").value;
	let pass2 = document.getElementById("password2").value;

	let text2 = document.getElementById("texto2");

	if (pass == pass2){
		return text2.innerHTML = "Contraseña correcta.";
	}
	else {
		return text2.innerHTML = "Contraseñas no son iguales.";
	}

}