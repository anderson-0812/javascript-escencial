$(document).ready(function(){
	$("#barra_deter").progressbar({
		value: 50 // deteminamos elvalor de la barra de progreso este valor va de 0 - 100
	});

	$("#barra_indet").progressbar({
		value: false // indeteminamos elvalor de la barra de progreso
	});
});