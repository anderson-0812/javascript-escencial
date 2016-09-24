$(document).ready(function(){
	$("#arrastrar").draggable();

	$("#soltar").droppable({
		drop: function(){
			alert("Has puesto el circulo en su lugar ");
			$("#soltar").css({"border":"10px solid yellow"});
		}
	})
});