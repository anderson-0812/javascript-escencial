$(document).ready(function(){
	var datos =  '[{"Marca":"Ford"},{"Marca":"Chevrolet"},{"Marca":"Ferrari"},{"Marca":"Audi"},{"Marca":"Kia"}]';
	var cadena = "";
	var base_datos= $.parseJSON(datos);

	$.each(base_datos,function(){
		cadena += "<li>" + this["Marca"] + "</li>" + "<br>";
	});

	$("span").html(cadena);
});