$(document).ready(function(){
	var xml_string 
		= "<xml version = 1.0>"
			+"<persona>"
				+"<codigo>" +"001" +"</codigo>"
				+"<nombre>" +"Carlos" +"</nombre>"
				+"<apellido>" +"Vergara" +"</apellido>"
			+"</persona>"
		+" </xml>";

	var $xml = $(xml_string);
	var codigo= $xml.find("codigo");
	var nombre = $xml.find("nombre");
	var apellido = $xml.find("apellido");

	$("#codigo").html(codigo);
	$("#nombre").html(nombre);
	$("#apellido").html(apellido);

});