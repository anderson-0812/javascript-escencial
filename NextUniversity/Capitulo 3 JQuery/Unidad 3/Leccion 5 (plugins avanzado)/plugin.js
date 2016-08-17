jQuery.fn.crearTitulo = function(tamanio,letra,titulo){
	this.each(function(){
		element = $(this);
		element.html(titulo);
		element.css(
			{
				"fontSize":tamanio+"px",
				"font-family":letra

		});
	});
};


jQuery.fn.crearTitulo1 = function(json){
	this.each(function(){
		element = $(this);
		element.html(json.titulo);
		element.css({
			"fontSize":json.tipo+"px",
			"font-family":json.fuente
		});
	});
};
$(document).ready(function(){
	$("#titulo").crearTitulo(20,"Times New Roman","Prueba");

	$("#titulo1").crearTitulo1({
		tipo:"25",
		fuente:"arial",
		titulo:"envio como json"
	});

});
