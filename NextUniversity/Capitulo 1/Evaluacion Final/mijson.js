var estuduantes = 
[
	{
		"codigo":"001",
		"nombre":"Anderson",
		"nota":18

	},
	{
		"codigo":"002",
		"nombre":"Jose",
		"nota":18
	},
	{
		"codigo":"003",
		"nombre":"zeta",
		"nota":15
	},
	{
		"codigo":"004",
		"nombre":"juan",
		"nota":11
	},
	{
		"codigo":"005",
		"nombre":"Maria",
		"nota":14
	},
	{
		"codigo":"006",
		"nombre":"Pedro",
		"nota":19
	},
	{
		"codigo":"007",
		"nombre":"Marco",
		"nota":16
	},
	{
		"codigo":"008",
		"nombre":"Geovana",
		"nota":19
	},
	{
		"codigo":"009",
		"nombre":"Tatiana",
		"nota":15
	},
	{
		"codigo":"010",
		"nombre":"Andres",
		"nota":14
	}
];

function mostrar_json(){
	var i =0;
	var out = '';
	document.getElementById('titulo').innerHTML = 'Lista de todos lo estudianes';
	for(i =0; i < estuduantes.length; i ++){
		out += "Codigo: "+estuduantes[i].codigo+' Nombre: '+estuduantes[i].nombre+' Nota: '+estuduantes[i].nota+'<br/>';
	}

	document.getElementById('resultado').innerHTML = out;
}

function mostrar_promedio(){
	var i =0;
	var out = 0.0;
	document.getElementById('titulo').innerHTML = 'Promedio de estudiantes';
	for(i =0; i < estuduantes.length; i ++){
		out += parseFloat(estuduantes[i].nota);
	}

	out /=  parseFloat(estuduantes.length);
	document.getElementById('resultado').innerHTML = out;
}

function mayor_nota(){
	var i =0;
	var mayor = 0.0;
	var out= '';
	document.getElementById('titulo').innerHTML = 'Estudiante con mayor nota ';
	for(i =0; i < estuduantes.length; i ++){
		if(mayor < parseFloat(estuduantes[i].nota)){
			mayor = parseFloat(estuduantes[i].nota);
			out = "Codigo: "+estuduantes[i].codigo+' Nombre: '+estuduantes[i].nombre+' Nota: '+estuduantes[i].nota+'<br/>';

		}else if(mayor == parseFloat(estuduantes[i].nota)){
			out += "Codigo: "+estuduantes[i].codigo+' Nombre: '+estuduantes[i].nombre+' Nota: '+estuduantes[i].nota+'<br/>';

		}
		
	}

	document.getElementById('resultado').innerHTML = out;
}

function menor_nota(){
	var i =0;
	var menor = 20.0;
	var out= '';
	document.getElementById('titulo').innerHTML = 'Estudiante con menor nota ';
	for(i =0; i < estuduantes.length; i ++){
		if(menor > parseFloat(estuduantes[i].nota)){
			menor = parseFloat(estuduantes[i].nota);
			out = "Codigo: "+estuduantes[i].codigo+' Nombre: '+estuduantes[i].nombre+' Nota: '+estuduantes[i].nota+'<br/>';

		}else if(menor == parseFloat(estuduantes[i].nota)){
			out += "Codigo: "+estuduantes[i].codigo+' Nombre: '+estuduantes[i].nombre+' Nota: '+estuduantes[i].nota+'<br/>';

		}
		
	}

	document.getElementById('resultado').innerHTML = out;
}

