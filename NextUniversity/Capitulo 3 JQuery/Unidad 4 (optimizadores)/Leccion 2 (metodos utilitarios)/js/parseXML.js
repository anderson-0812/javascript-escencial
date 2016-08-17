$(document).ready(function(){
	var datos = "<xml version='1.0'>"
					+" <persona> "
						+"<nombres> Pedro </nombres> <apellidos> Perez </apellidos> "
					+"</persona>"
				+" </xml>";
	// leemos el xml de esa forma la variable 			
	var $xml = $(datos);
	var $nombres = $xml.find('nombres');
	var $apellidos = $xml.find('apellidos');

	$('#nombres').html($nombres);
	$('#apellidos').html($apellidos);

});