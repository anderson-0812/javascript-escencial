$(document).ready(function(){
	$("#btn1").click(function(){
		var miDiv = $("#miDiv");
		miDiv.queue(efectos(miDiv));
		miDiv.html("Se cambio el color de fondo a azul");
	});

	function efectos(miDiv){
		miDiv.css(
			{
				"background-color":"blue",
			}
		);

		miDiv.hide(1000);
		miDiv.show(1000);
		miDiv.fadeIn(3000);
		miDiv.fadeOut(3000);
		miDiv.show(1000);

	}

});