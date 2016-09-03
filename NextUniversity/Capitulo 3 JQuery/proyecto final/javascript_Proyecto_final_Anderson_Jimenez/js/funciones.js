$(document).ready(function(){
		//var estudiante =[];
		recorrer_localStorage();
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

});
		function editar_estudiante(id){
			for (var i = 0; i < localStorage.length; i++) {
				var clave = localStorage.key(i);
				if(clave == id){
					estudiantes = $.parseJSON(localStorage.getItem(clave));

					$("#codigo").val(estudiantes.codigo);
					$("#nombre").val(estudiantes.nombre);
					$("#nota").val(estudiantes.nota);

				}
			}
		}

		function eliminar_estudiante(id){
			localStorage.removeItem(id);
			recorrer_localStorage();
		}
        function registrar_estudiante(){
                var codigo = document.getElementById('codigo').value;
                var nombre = document.getElementById('nombre').value;
                var nota = document.getElementById('nota').value;

                datos_correctos = validar_datos(codigo,nombre,nota);
                if(datos_correctos == true){
                        //llenar_json(codigo,nombre,nota);

                        llenar_localStorage(codigo,nombre,nota);
                        //console.table(estudiante);
                        //console.log(estudiante);

                        recorrer_localStorage();
                        document.getElementById('codigo').focus();

                }

        }

        function recorrer_localStorage(){
        	$("#lista_notas tbody").remove();
        		$("#lista_notas").append("<tbody></tbody>");
        	for (var i = 0; i < localStorage.length; i++) {
        		var clave = localStorage.key(i);
        		estudiantes = $.parseJSON(localStorage.getItem(clave));
        		// console.log(estudiantes);
                llenar_tabla(estudiantes.codigo,estudiantes.nombre,estudiantes.nota);


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

        /*function llenar_json(codigo,nombre,nota){
                estudiante.push(
                                {
                                        cod: codigo,
                                        nombre: nombre,
                                        nota: nota
                                }
                        );
        }*/
        function llenar_localStorage(codigo,nombre,nota){
        	var estudiantes = {
        		codigo:codigo,
        		nombre: nombre,
        		nota:nota
        	}

        	localStorage.setItem(codigo,JSON.stringify(estudiantes));
        }

        function llenar_tabla(codigo,nombre,nota){
        		

                var nodos_contenedor_lsita = document.getElementsByTagName('div')[1];
                var nodos_hijos_divi_lsita = nodos_contenedor_lsita.childNodes;
                var tabla;
                var btn_eliminar = "<td>"+'<button id="btn_eliminar" onclick="eliminar_estudiante(\''+codigo+'\');">Eliminar</button>'+"</td>"; 

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
                        //nodo_tr.setAttribute("class", "tr_tabla");
                        //nodo_tr.setAttribute("style", "padding: 20px !important;");


                        // Creo los nodos de td
                        var nodo_td_codigo = document.createElement('td');
                        var nodo_td_nombre = document.createElement('td');
                        var nodo_td_nota = document.createElement('td');
                        // creo Boton Editar
                        var nodo_td_editar = document.createElement('td');
                        // creo Boton Eliminar
                        var nodo_td_eliminar = document.createElement('td');



                        // creo valor a los td de codigo nombre y nota
                        var texto_codigo = document.createTextNode(codigo);
                        var texto_nombre = document.createTextNode(nombre);
                        var texto_nota = document.createTextNode(nota);

                        //cre el boton editar asigno id y clase
                        var btn_editar = document.createElement('button');
                        var text_editar = document.createTextNode('Editar');
                        btn_editar.appendChild(text_editar);
                        btn_editar.setAttribute("onclick",'editar_estudiante(\''+codigo+'\');');
                        btn_editar.setAttribute("id","btn_editar");
                        btn_editar.setAttribute("class","btn_editar");

                        //cre el boton eliminar asigno id y clase
                        var btn_eliminar = document.createElement('button');
                        var text_eliminar = document.createTextNode('Eliminar');
                        btn_eliminar.appendChild(text_eliminar);
                        btn_eliminar.setAttribute("onclick",'eliminar_estudiante(\''+codigo+'\');');
                        btn_eliminar.setAttribute("id",'btn_eliminar');
                        btn_eliminar.setAttribute("class",'btn_eliminar');




                        // doy el valor de texto creado a los td 
                        nodo_td_codigo.appendChild(texto_codigo);
                        nodo_td_nombre.appendChild(texto_nombre);
                        nodo_td_nota.appendChild(texto_nota);
                        nodo_td_editar.appendChild(btn_editar);
                        nodo_td_eliminar.appendChild(btn_eliminar);



                        // asignos los tds al tr
                        nodo_tr.appendChild(nodo_td_codigo);
                        nodo_tr.appendChild(nodo_td_nombre);
                        nodo_tr.appendChild(nodo_td_nota);
                        nodo_tr.appendChild(nodo_td_editar);
                        nodo_tr.appendChild(nodo_td_eliminar);



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

//});
