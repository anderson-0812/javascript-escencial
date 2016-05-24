function conervir(){
	var numero1 = parseInt(document.getElementById('numero1').value);
	var resultado;
	var opciones = parseInt(document.getElementById('opciones').value);

	if(validar(numero1)){
		switch(opciones){
			case 0:
				alert('Por favor elija Una Opcion');
				break;
			//Celcius a Kelvin
			case 1:
				resultado = numero1 + 273.15;
				break;

			//Celcius a Fahrenheit
			case 2:
				resultado = numero1*(1.8)+32;
				break; 

			//Fahrenheit a Celcius
			case 3:
				resultado = ((numero1-32)*5)/9;
				break;
			//Fahrenheit a Kelvin
			case 4:
				resultado = ( ( ( (numero1-32)*5))/9) +273.15; 
				break;
			//Kelvin a Celcius
			case 5:
				resultado = numero1-273.15;
				break;
			//Kelvin a Fahrenheit
			case 6:
				resultado = ((((numero1-273.15)*9))/5)+32;
				break;
		}

		document.getElementById('resultado').value = resultado;
	}else{
		alert('Elformato de numero es incorrecto');
		document.getElementById('opciones').selecedIndex='0';
	}
}
// validamos datos ingresados por el usuario
function validar(num1) {
	if(isNaN(num1)){
		return false;
	}else{
		return true;
	}
}