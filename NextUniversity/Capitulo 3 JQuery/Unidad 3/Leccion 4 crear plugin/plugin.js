// Creamos el plugin
jQuery.fn.plugin_hide = function(){
	this.each(function(){
		elemento = $(this);
		elemento.hide(1000);
	});
};

$(document).ready(function(){
	$("#eliminar").click(function(){
		// llamamos el plugin 
		$("#parrafo").plugin_hide();
	});	
});