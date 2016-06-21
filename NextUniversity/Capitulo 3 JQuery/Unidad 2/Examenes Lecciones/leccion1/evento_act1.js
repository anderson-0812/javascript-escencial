$(document).ready(function(){
	// actividad 1
	$("#bdclick_p").dblclick (function(){
		alert("has hecho doble click sobre mi");
	});

	// actividad 2
	$("#mouseover").mouseleave(function(){
		alert("has quitado de encima mio el cursor");
	});

	// actividad3
	$(".inpu").focus(function(){
		$(this).css("background-color","#CCD34C");
	});
	$(".inpu").blur(function(){
		$(this).css("background-color","#FFFBF1");
	});
});