$(document).ready(function(){
	$('body').delegate('#parrafo',"click",function(){
		$('body').append("<p id='parrafo'> parrafo nuevo creado tb presioname </p>");
	});


	$("#desvincular").on("click",function(){
		$("body").undelegate();
	});
});