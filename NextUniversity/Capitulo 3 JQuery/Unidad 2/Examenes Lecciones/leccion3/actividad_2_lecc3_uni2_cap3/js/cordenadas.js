$(document).ready(function(){
	$(document).mousemove(function(event){
		$("#cordenadas").text("Las cordenadas de raton en pantalla son: X: " + event.pageX + ", Y: " + event.pageY);
	});
});