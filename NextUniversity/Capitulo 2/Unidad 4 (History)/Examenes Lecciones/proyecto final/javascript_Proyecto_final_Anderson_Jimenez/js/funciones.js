
var estudiante =[];

// llamoa  las funciones usando los addEventListener
document.getElementById('registrarEstudiante').addEventListener('click',registrar_estudiante);
//document.getElementById('btn_list').addEventListener("click",mostrar_mensaje);

document.getElementById('mostrarPromedio').addEventListener('click',function(){
	mostrar_promedio();
});

document.getElementById('notaMayor').addEventListener('click',mayor_nota);
document.getElementById('notaMenor').addEventListener('click',function(){
	menor_nota();
});


function registrar_estudiante(){
	var codigo = document.getElementById('codigo').value;
	var nombre = document.getElementById('nombre').value;
	var nota = document.getElementById('nota').value;

	datos_correctos = validar_datos(codigo,nombre,nota);
	if(datos_correctos == true){
		llenar_json(codigo,nombre,nota);
		//console.table(estudiante);
		//console.log(estudiante);

		llenar_tabla(codigo,nombre,nota);

		document.getElementById('codigo').focus();

	}

}

function validar_datos(codigo,nombre,nota){
	if((codigo != null && codigo != '') && (nombre != null && nombre != '') && (nota != null && nota!= '')){
		return true;
	}else{
		alert('Datos no pueden ser vacios o nulos');
		return false;
	}

}

function validar_numero(element){
	var es_num = true;
	//alert(parseFloat(element.value));

	if(isNaN(parseFloat(element.value))){
		es_num = false;
	}

	if(es_num ==false){
		element.value ='';
	}
}

function llenar_json(codigo,nombre,nota){
	estudiante.push(
			{
				cod: codigo,
				nombre: nombre,
				nota: nota
			}
		);
}

function llenar_tabla(codigo,nombre,nota){
	var nodos_contenedor_lsita = document.getElementsByTagName('div')[1];
	var nodos_hijos_divi_lsita = nodos_contenedor_lsita.childNodes;
	var tabla;
	//console.log(nodos_contenedor_lsita.firstChilddiv.firstChild.nodeName);
		//alert(nodos_hijos_divi_lsita[1].nodeName);
		//alert(nodos_contenedor_lsita.childNodes.length);
	 tabla = get_tabla(nodos_hijos_divi_lsita);

	// lleno la tabla
		//console.log(tabla);

		var tabla_hijos = tabla.childNodes;

		var tabla_tbody = get_tbody(tabla_hijos);
		// console.log(tabla_tbody);

		var nodo_tr = document.createElement('tr');

		// Creo los nodos de td
		var nodo_td_codigo = document.createElement('td');
		var nodo_td_nombre = document.createElement('td');
		var nodo_td_nota = document.createElement('td');

		// creo valor a los td de codigo nombre y nota
		var texto_codigo = document.createTextNode(codigo);
		var texto_nombre = document.createTextNode(nombre);
		var texto_nota = document.createTextNode(nota);

		// doy el valor de texto creado a los td 
		nodo_td_codigo.appendChild(texto_codigo);
		nodo_td_nombre.appendChild(texto_nombre);
		nodo_td_nota.appendChild(texto_nota);


		// asignos los tds al tr
		nodo_tr.appendChild(nodo_td_codigo);
		nodo_tr.appendChild(nodo_td_nombre);
		nodo_tr.appendChild(nodo_td_nota);



		tabla_tbody.appendChild(nodo_tr);

		document.getElementById('registro_estudiantes').reset();
		// var text = document.createTextNode('Texto de parrafo');
		// nodo.appendChild(text);

		// document.body.appendChild(nodo);
	
}

function get_tbody(tabla_hijos){
	for(var i = 0;i < tabla_hijos.length; i++){
		if(tabla_hijos[i].nodeName == 'TBODY'){
			return tabla_hijos[i];
			break;
		}
	}
}

function get_tabla(nodos_hijos_divi_lsita){
	for(var i =0; i < nodos_hijos_divi_lsita.length; i++){
		if(nodos_hijos_divi_lsita[i].nodeName == 'TABLE'){
			return nodos_hijos_divi_lsita[i];
			//console.log(tabla);
			break;
		}
	}

}

//  FUNCION DE PROMEDIOS 
function mostrar_promedio(){
	var i =0;
	var out = 0.0;
	for(i =0; i < estudiante.length; i ++){
		out += parseFloat(estudiante[i].nota);
	}

	out /=  parseFloat(estudiante.length);
	alert('El promedio es '+out);
}
function mayor_nota(){
	var i =0;
	var mayor = 0.0;
	var out= '';
	for(i =0; i < estudiante.length; i ++){
		if(mayor < parseFloat(estudiante[i].nota)){
			mayor = parseFloat(estudiante[i].nota);
			out = "	NOTA MAS ALTA\n Codigo: "+estudiante[i].cod+' Nombre: '+estudiante[i].nombre+' Nota: '+estudiante[i].nota+'\n';

		}else if(mayor === parseFloat(estudiante[i].nota)){
			out += "Codigo: "+estudiante[i].cod+' Nombre: '+estudiante[i].nombre+' Nota: '+estudiante[i].nota+'\n';

		}
		
	}

	alert(out);
}

function menor_nota(){
	var i =0;
	var menor = 20.0;
	var out= '';
	for(i =0; i < estudiante.length; i ++){
		if(menor > parseFloat(estudiante[i].nota)){
			menor = parseFloat(estudiante[i].nota);
			out = "	NOTA MAS BAJA \n Codigo: "+estudiante[i].cod+' Nombre: '+estudiante[i].nombre+' Nota: '+estudiante[i].nota+'\n';

		}else if(menor === parseFloat(estudiante[i].nota)){
			out += "Codigo: "+estudiante[i].cod+' Nombre: '+estudiante[i].nombre+' Nota: '+estudiante[i].nota+'\n';

		}
		
	}

	alert(out);
}
