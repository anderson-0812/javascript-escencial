$(document).ready(function(){
	$("#arrastrar").draggable();
	$("#soltar").droppable({
		drop: function(){
			alert("Soltaste el elemento arrastrar en la caja");
		}
	});
});